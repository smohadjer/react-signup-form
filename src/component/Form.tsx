import { FormEvent, useState } from 'react';
import { FormField } from './FormField';
import { SignupProps, ServerError } from '../types';
import './Form.css';

export function Form(props: SignupProps) {
    const { method, action, fields, buttonLabel } = props;
    const [disableValidation, setDisableValidation] = useState(false);

    function submitHandler(e: FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const json = JSON.stringify(Object.fromEntries(data));

        // submit form data as json to server
        fetch(action, {
            method: method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: json
        })
        .then((response) => response.json())
        .then(json => {
            if (json.error) {
                const error: ServerError[] = json.error
                const errors = error.map(error =>
                    `${error.instancePath}: ${error.message}`);
                alert(JSON.stringify(errors));
            } else {
                alert('Server received valid data');
            }
        });
    }

    function changeHandler(e: React.ChangeEvent) {
        const checkbox = e.target as HTMLInputElement;
        setDisableValidation(checkbox.checked);
    }

    return (
        <>
            <p><label><input
                type="checkbox"
                name="disable-validate"
                onChange={(e) => {changeHandler(e)}} />
                Disable Client-side Validation</label>
            </p>
            <form
                noValidate={disableValidation ? true : false}
                className="form-react"
                method={method}
                action={action}
                onSubmit={submitHandler}>
                <fieldset>
                    {fields.map(item => <FormField key={item.id} {...item} />)}
                </fieldset>
                <button type="submit">{buttonLabel}</button>
            </form>
        </>
    )
}
