import { useState } from "react";
import imgUrl from './assets/eye.svg'

interface Props {
    id: string,
    label: string,
    required?: boolean,
    inputType: string;
    pattern?: string;
    placeholder: string;
    error: string;
}

export function Field(props: Props) {
    const [score, setScore] = useState(0);
    const [type, setType] = useState('password');

    function onInputHandler(e) {
        const password = e.target.value;
        let tempScore = 0;
        validationRules.forEach((item, i) => {
            const isValid = item.regex.test(password);
            if(isValid) {
                tempScore++;
            }
        });
        setScore(tempScore);
    }

    function onClickHandler(e) {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }

    }

    const validationRules = [
        { regex: /.{8,}/ }, // min 8 letters,
        { regex: /[0-9]/ }, // numbers from 0 - 9
        { regex: /[a-z]/ }, // letters from a - z (lowercase)
        { regex: /[A-Z]/}, // letters from A-Z (uppercase),
        { regex: /[^A-Za-z0-9]/} // special characters
    ]

    return (
        <>
            <label
                {...(props.required ? {className: 'required'} : {})}
                htmlFor={props.id}
            >{props.label}:</label>
            <div>
                <input
                    { ...(props.inputType === 'password' ?
                        {onInput: onInputHandler} : {})
                    }
                    required={props.required}

                    { ...(props.inputType === 'password' ?
                        {type: type} : {type: props.inputType})
                    }

                    id={props.id}
                    name={props.id}
                    pattern={props.pattern}
                    placeholder={props.placeholder} />

                {props.inputType === 'password' &&
                <div className="password-checker">
                    <div>Complexity Score: <span>{score}/5</span></div>
                    <img width="25" src={imgUrl} alt="show password" onClick={onClickHandler} />
                </div>}
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
