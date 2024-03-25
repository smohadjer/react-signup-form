import { Form } from './component/Form';
import signupFields from './data/signupForm.json';
import loginFields from './data/loginForm.json';

export default function App() {
  return (
    <>
        <h1>Signup Form</h1>
        <Form method="POST" action="/api/signup" fields={signupFields} />

        <h1>Login Form</h1>
        <Form method="POST" action="/api/login" fields={loginFields} />
        <p><a href="https://github.com/smohadjer/signup-form">Code on GitHub</a></p>
    </>
  )
}
