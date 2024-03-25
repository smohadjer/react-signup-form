import { MouseEventHandler } from "react";
import show from '../assets/eye-fill.svg';
import hide from '../assets/eye-slash-fill.svg';
import './PasswordToggle.css';

interface Props {
    type: string;
    onClick: MouseEventHandler;
}

export function PasswordToggle ({type, onClick}: Props) {
    return (
        <button
            className="password-toggle"
            title={type === 'password' ? 'Show password' : 'Hide password'}
            type="button"
            onClick={onClick}>
            <img
                width="25"
                src={type === 'password' ? show : hide}
                alt="hide/show password" />
        </button>
    )
}
