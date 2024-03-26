import { Form } from './components/form/Form';
import signupFields from './data/signupForm.json';
import loginFields from './data/loginForm.json';

export default function App() {
  return (
    <>
        <h1>Signup Form</h1>
        <Form method="POST" action="/api/signup" fields={signupFields} buttonLabel="Sign Up" />
        <hr />
        <h1>Login Form</h1>
        <Form method="POST" action="/api/login" fields={loginFields} buttonLabel="Login" />
    </>
  )
}
