import './PasswordChecker.css';

const passwordRules = [
    { regex: /.{8,}/ }, // min 8 letters,
    { regex: /[0-9]/ }, // numbers from 0 - 9
    { regex: /[a-z]/ }, // letters from a - z (lowercase)
    { regex: /[A-Z]/}, // letters from A-Z (uppercase),
    { regex: /[^A-Za-z0-9]/} // special characters
];

export function PasswordChecker({password}: {password: string}) {
    const calculateScore = (password: string, rules: {regex: RegExp;}[]) => {
        let score = 0;
        rules.forEach((item) => {
            const isValid = item.regex.test(password);
            if(isValid) {
                score++;
            }
        });
        return score;
    };
    const score = calculateScore(password, passwordRules);
    const securityLevel = (score < 3) ? 'low' :
        (score < 5) ? 'medium' : 'high';
    return (
        <div>Security: <span className={securityLevel}>{securityLevel}</span></div>
    )
}
