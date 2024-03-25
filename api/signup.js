import ajv from './_validator.js';
import * as fs from 'fs';

const schema = JSON.parse(fs.readFileSync(process.cwd() + '/schema/signup.json', 'utf8'));

export default async (req, res) => {
    if (req.method === 'POST') {
        const validator = ajv.compile(schema);
        const valid = validator(req.body);
        if (!valid) {
            return res.json({error: validator.errors});
        } else {
            return res.json(`Server received valid data: ${JSON.stringify(req.body)}`);
        }
    }
}
