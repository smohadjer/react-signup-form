import { FormEvent } from 'react';
import { FormField } from './FormField';
import { SignupProps } from '../types';
import './Form.css';

export function Form({method, action, fields}: SignupProps) {
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
          .then((response) => response.text())
          .then(res => alert(res));
    }

    const formFields = fields.map(item =>
        <FormField key={item.id} {...item} />
    )

    return (
        <form method={method} action={action} onSubmit={onSubmitHandler}>
            <fieldset>
                {formFields}
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )
}
