import { useState } from "react";
import { PasswordChecker } from './PasswordChecker';
import { PasswordToggle } from "./PasswordToggle";

interface FieldProps {
    id: string,
    label: string,
    required?: boolean,
    inputType: string;
    pattern?: string;
    placeholder: string;
    error: string;
}

export function FormField(props: FieldProps) {
    const [type, setType] = useState('password');
    const [password, setPassword] = useState('');

    function onInputHandler(e: any) {
        const input = e.target as HTMLInputElement;
        setPassword(input.value);
    }

    function onClickHandler() {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    }

    return (
        <>
            <label
                {...(props.required ? {className: 'required'} : {})}
                htmlFor={props.id}
            >{props.label}:</label>
            <div>
                <input
                    {...(props.inputType === 'password' ? {onInput: onInputHandler} : {})}
                    required={props.required}
                    { ...(props.inputType === 'password' ?
                        {type: type} : {type: props.inputType})
                    }
                    id={props.id}
                    name={props.id}
                    pattern={props.pattern}
                    placeholder={props.placeholder}
                />
                {props.inputType === 'password' &&
                <div className="password-checker">
                    <PasswordChecker password={password} />
                    <PasswordToggle type={type} onClick={onClickHandler} />
                </div>}
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
