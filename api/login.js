import { sanitize, ajv } from './_lib.js';
import * as fs from 'fs';

const schema = JSON.parse(fs.readFileSync(process.cwd() + '/schema/login.json', 'utf8'));

export default async (req, res) => {
    if (req.method === 'POST') {
        const validator = ajv.compile(schema);
        const valid = validator(sanitize(req.body));
        if (!valid) {
            return res.json({error: validator.errors});
        } else {
            return res.json(`Server received valid data: ${JSON.stringify(req.body)}`);
        }
    }
}
