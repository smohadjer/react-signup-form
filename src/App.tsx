import { Field } from './Field';
import formFields from './form.json';
import './App.css';

export default function App() {
  return (
    <form className="theme-minimal" method="post" action="api/signup">
        <fieldset>
            <legend>Signup Form</legend>
            {formFields.map(item =>
                <Field key={item.id} {...item} />
            )}
        </fieldset>
        <button>Submit</button>
    </form>
  )
}
