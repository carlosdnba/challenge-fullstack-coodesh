import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import files from '../services/files';
import parser from '../helpers/parser';
import transactionValidation from '../validation/transaction';
import Transaction from '../models/Transaction';

export default {
  async healthCheck(req: Request, res: Response) {
    res.status(200).send({
      status: 'ok',
      message: 'Server is up and running.'
    });
  },

  async index(req: Request, res: Response) {
    // Getting file data from request
    const [file] = req.files as Express.Multer.File[];
    const data = await files.readFile(file.path);

    const transactions = parser.transactionsFileIntoList(data);

    // Validating each transaction before storing data
    for (const t of transactions) {
      await transactionValidation.validate(t);
    }

    // If there are no errors, store data into database
    const repository = getRepository(Transaction)

    for (const t of transactions) {
      const transaction = repository.create(t);
      await repository.save(transaction);
    };

    // Removing file to not fill up the server
    await files.deleteFile(file.path);

    res.status(200).send({
        transactions
    });
  },
};
