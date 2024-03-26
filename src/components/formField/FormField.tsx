import { Field } from '../../types';
import { Password } from '../password/Password';

export function FormField(props: Field) {
    return (
        <>
            <label
                {...(props.required ? {className: 'required'} : {})}
                htmlFor={props.id}>{props.label}:
            </label>
            <div>
                { props.type === 'password'
                    ? <Password {...props} />
                    : <input
                        required={props.required}
                        id={props.id}
                        name={props.id}
                        pattern={props.pattern}
                        placeholder={props.placeholder}
                        type={props.type}
                    />
                }
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
