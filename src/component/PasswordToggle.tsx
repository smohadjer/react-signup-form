import { MouseEventHandler } from "react";
import show from '../assets/eye-fill.svg';
import hide from '../assets/eye-slash-fill.svg';
import './PasswordToggle.css';

export function PasswordToggle ({type, onClick}: {type: string, onClick: MouseEventHandler}) {
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
