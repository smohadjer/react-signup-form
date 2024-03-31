import { InputProps } from '../../types';

export function Input({
        id, type, placeholder, hasError, required, pattern, onInput, autoComplete
    }: InputProps) {
    return (
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            {...(hasError ?
                {className: 'hasError'} : {})}
            required={required}
            pattern={pattern}
            onInput={onInput}
            autoComplete={autoComplete}
        />
    )
}
