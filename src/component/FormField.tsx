import { useState } from "react";
import { PasswordChecker } from './PasswordChecker';
import { PasswordToggle } from "./PasswordToggle";
import { Field } from '../types';

export function FormField(props: Field) {
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

    const flexClass = (props.hasStrengthIndicator && props.hasDisplayToggle) ? ' flex' : '';
    const passwordWrapperClass = 'password-wrapper' + flexClass;

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
                {props.inputType === 'password' && (
                    <div className={passwordWrapperClass}>
                        {props.hasStrengthIndicator && <PasswordChecker password={password} />}
                        {props.hasDisplayToggle && <PasswordToggle type={type} onClick={onClickHandler} />}
                    </div>
                )}
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
