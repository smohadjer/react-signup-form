import Ajv from 'ajv';
import addFormats from "ajv-formats"

const ajv = new Ajv({
  coerceTypes: true,
  allErrors: true,
  strict: false,
});

// adds support for string formats such as email
addFormats(ajv);

export default ajv;
