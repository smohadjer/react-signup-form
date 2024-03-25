import './StrengthChecker.css';

const rules = [
    { regex: /.{8,}/ }, // min 8 letters
    { regex: /[0-9]/ }, // numbers from 0 - 9
    { regex: /[a-z]/ }, // letters from a - z (lowercase)
    { regex: /[A-Z]/}, // letters from A-Z (uppercase)
    { regex: /[^A-Za-z0-9]/} // special characters
];

// each rule that is met adds one point to the score. Score 1-2 is weak,
// 3-4 is medium, 5 is strong.
const calculateScore = (password: string, rules: {regex: RegExp;}[]) => {
    let score = 0;
    rules.forEach((item) => {
        const isValid = item.regex.test(password);
        if (isValid) {
            score++;
        }
    });
    return score;
};

export function StrengthChecker({password}: {password: string}) {
    const score = calculateScore(password, rules);
    const strength = (score < 3) ? 'low' :
        (score < 5) ? 'medium' : 'high';
    return (
        <div>Strength: <span className={strength}>{strength}</span></div>
    )
}
