import { FormEvent } from 'react';
import { FormField } from './FormField';
import { SignupProps } from '../types';
import './Form.css';

export function Form({method, action, fields, buttonLabel}: SignupProps) {
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

    return (
        <form className="form-react" method={method} action={action} onSubmit={onSubmitHandler}>
            <fieldset>
                {fields.map(item => <FormField key={item.id} {...item} />)}
            </fieldset>
            <button type="submit">{buttonLabel}</button>
        </form>
    )
}
