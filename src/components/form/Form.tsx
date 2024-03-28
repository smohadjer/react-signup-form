import { FormEvent, useState } from 'react';
import { FormField } from '../formField/FormField';
import { FormProps, ServerError, Error } from '../../types';
import './Form.css';

export function Form(props: FormProps) {
    const { method, action, fields, label, disableValidation } = props;
    const [errors, setErrors] = useState<Error[]>([]);

    function updateErrors(newErrors: Error[]) {
        setErrors(newErrors);
    }

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
                const normalizedErrors: Error[] = errors.map(error => {
                    if (error.instancePath.length > 0) {
                        return {
                            id: error.instancePath.substring(1),
                            error: error.message
                        }
                    } else {
                        return {
                            id: error.params.missingProperty,
                            error: error.message
                        }
                    }
                });
                updateErrors(normalizedErrors);
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
                {fields.map((item, index) => {
                    const error = errors.find((error) => error.id === item.id);
                    return <FormField errorsObject={error} key={index} {...item} />
                })}
            </fieldset>
            <button type="submit">{label}</button>
        </form>
    )
}
