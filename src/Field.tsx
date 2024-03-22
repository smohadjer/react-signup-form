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
    return (
        <>
            <label
                {...(props.required ? {className: 'required'} : {})}
                htmlFor={props.id}
            >{props.label}:</label>
            <div>
                <input
                    required={props.required}
                    type={props.inputType}
                    id={props.id}
                    name={props.id}
                    pattern={props.pattern}
                    placeholder={props.placeholder} />
                <span className="error">{props.error}</span>
            </div>
        </>
    )
}
