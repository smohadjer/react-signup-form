import { FormEvent, useState } from 'react';
import { FormField } from './FormField';
import { SignupProps } from '../types';
import './Form.css';

interface Error {
    instancePath: string;
    message: string;
}

export function Form({method, action, fields, buttonLabel}: SignupProps) {
    const [disableValidation, setDisableValidation] = useState(false);

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const json = JSON.stringify(Object.fromEntries(data));

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
                console.log(json.error);
                const error: Error[] = json.error
                const errors = error.map(error => error.instancePath + ': ' + error.message);
                alert(JSON.stringify(errors));
            } else {
                alert('Received valid data');
            }
          });
    }

    function onClickHandler(e: React.ChangeEvent) {
        const checkbox = e.target as HTMLInputElement;
        const checked = checkbox.checked;
        setDisableValidation(checked);
    }

    return (
        <>
        <p><label><input type="checkbox" name="disable-validate" onChange={(e) => {onClickHandler(e)}} /> Disable validation in browser to test server-side validation</label></p>
        <form noValidate={disableValidation ? true : false} className="form-react" method={method} action={action} onSubmit={onSubmitHandler}>
            <fieldset>
                {fields.map(item => <FormField key={item.id} {...item} />)}
            </fieldset>
            <button type="submit">{buttonLabel}</button>
        </form>
        </>
    )
}
