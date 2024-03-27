import { FormEvent } from 'react';
import { FormField } from '../formField/FormField';
import { FormProps, ServerError } from '../../types';
import './Form.css';

export function Form(props: FormProps) {
    const { method, action, fields, label, disableValidation } = props;

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
                const errors: ServerError[] = [...json.error];
                const normalizedErrors = errors.map(error => {
                    if (error.instancePath.length > 0) {
                        return `${error.instancePath.substring(1)}: ${error.message}`;
                    } else {
                        return `${error.params.missingProperty}: ${error.message}`;
                    }
                });
                alert(JSON.stringify(normalizedErrors));
            } else {
                alert('Server received valid data');
            }
        });
    }

    return (
        <form
            noValidate={disableValidation ? true : false}
            className="form-react"
            method={method}
            action={action}
            onSubmit={submitHandler}>
            <fieldset>
                {fields.map(item => <FormField key={item.id} {...item} />)}
            </fieldset>
            <button type="submit">{label}</button>
        </form>
    )
}
