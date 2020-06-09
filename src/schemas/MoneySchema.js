import Schema from '@jalik/schema';
import { mapOptionValues } from '../libs/utils';
import { currencies } from '../libs/values';

const MoneySchema = new Schema({
  amount: {
    type: 'integer',
    required: true,
    min: 0,
  },
  currency: {
    type: 'string',
    required: true,
    minLength: 1,
    allowed: mapOptionValues(currencies),
  },
});

export default MoneySchema;
