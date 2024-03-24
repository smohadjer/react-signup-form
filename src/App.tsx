import { FormField } from './component/FormField';
import formFields from './form.json';
import './App.css';
import './theme.css';

export default function App() {
  return (
    <>
        <h1>Signup Form</h1>
        <form className="theme-minimal" method="post" action="api/signup">
            <fieldset>
                {formFields.map(item =>
                    <FormField key={item.id} {...item} />
                )}
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}
