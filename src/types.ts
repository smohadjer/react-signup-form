export interface Field {
    id: string,
    label: string,
    required?: boolean,
    inputType: string;
    pattern?: string;
    placeholder: string;
    error?: string;
    hasStrengthIndicator
?: boolean;
    hasDisplayToggle?: boolean;
}

export interface SignupProps {
    method: string;
    action: string;
    fields: Field[];
    buttonLabel: string;
}
