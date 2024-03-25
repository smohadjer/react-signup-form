import Ajv from 'ajv';

const ajv = new Ajv({
  coerceTypes: true,
  allErrors: true,
  strict: false,
});

export default ajv;
