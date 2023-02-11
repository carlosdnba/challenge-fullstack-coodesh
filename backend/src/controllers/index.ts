import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

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
    const repository = getRepository(Transaction)

    const transactions = parser.transactionsFileIntoList(req.body.text);

    // Validating each transaction before storing data
    for (const t of transactions) {
      await transactionValidation.validate(t);
    }

    for (const t of transactions) {
      const transaction = repository.create(t);
      await repository.save(transaction);
    };

    res.status(200).send({
      transactions
    });
  },
};
