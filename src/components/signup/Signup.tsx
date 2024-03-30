import { useState } from 'react';
import { Form } from '../form/Form';
import fields from './signupForm.json';
import './Signup.css';

export function Signup() {
    const [disableValidation, setDisableValidation] = useState(false);

    function changeHandler(e: React.ChangeEvent) {
        const checkbox = e.target as HTMLInputElement;
        setDisableValidation(checkbox.checked);
    }

    return (
        <>
            <h1>Signup Form</h1>
            <p>
                <label>
                    <input
                    type="checkbox"
                    name="disable-validate"
                    onChange={(e) => {changeHandler(e)}}/>
                    Disable browser validation (form will be submitted despite errors, but server will validate and return errors)
                </label>
            </p>
            <Form method="POST" action="/api/signup" fields={fields} label="Sign Up" disableValidation={disableValidation} />
        </>
    )
}
