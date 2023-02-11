import * as Yup from 'yup';
import Transaction from '../models/Transaction';

const schema = Yup.object().shape({
  id: Yup.string().uuid().required(),
  type: Yup.number().required(),
  date: Yup.date().required(),
  product: Yup.string().required(),
  value: Yup.number().required(),
  salesPerson: Yup.string().required().label('The sales person'),
});

const validate = async (data: Transaction) => {
  await schema.validate(data, {
    abortEarly: false,
  });
};

export default {
  schema,
  validate,
};
