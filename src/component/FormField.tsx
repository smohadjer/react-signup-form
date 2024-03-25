import { useState } from "react";
import { StrengthChecker } from './StrengthChecker';
import { PasswordToggle } from "./PasswordToggle";
import { Field } from '../types';

export function FormField(props: Field) {
    const [type, setType] = useState('password');
    const [password, setPassword] = useState('');

    function inputHandler(e: React.FormEvent) {
        const input = e.target as HTMLInputElement;
        setPassword(input.value);
    }

    function clickHandler() {
        const newType = (type === 'password') ? 'text' : 'password';
        setType(newType);
    }

    const flexClass = (props.hasStrengthIndicator &&
        props.hasDisplayToggle) ? 'flex' : '';
    const passwordWrapperClass = `password-wrapper ${flexClass}`;

    return (
        <>
            <label
                {...(props.required ? {className: 'required'} : {})}
                htmlFor={props.id}
            >{props.label}:</label>
            <div>
                <input
                    required={props.required}
                    id={props.id}
                    name={props.id}
                    pattern={props.pattern}
                    placeholder={props.placeholder}
                    {...(props.inputType === 'password' ?
                        {onInput: (e) => {inputHandler(e)}} : {})
                    }
                    {...(props.inputType === 'password' ?
                        {type: type} : {type: props.inputType})
                    }
                    {...(props.inputType === 'password' ?
                        {autoComplete: 'new-password'} : {})
                    }
                />
                {props.inputType === 'password' && (
                    <div className={passwordWrapperClass}>
                        {props.hasStrengthIndicator &&
                            <StrengthChecker password={password} />}
                        {props.hasDisplayToggle &&
                            <PasswordToggle type={type} onClick={clickHandler} />}
                    </div>
                )}
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
