import { Request, Response } from 'express';

export default {
  async healthCheck(req: Request, res: Response) {
    res.status(200).send({
      status: 'ok',
      message: 'Server is up and running.'
    });
  },

  async index(req: Request, res: Response) {
    console.log('Someone has hit me.')
  },
};
