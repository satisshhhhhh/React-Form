import {useState} from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [ values, setValues] = useState({
    username:"",
    fullname:"",
    email:"",
    password:"",
    confirmpassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage: "Username should be 4-15 characters with NO special charcters",
      label:"Username",
      pattern: "^[A-Za-z0-9]{4,15}$",
      required: true
    },
    // {
    //   id:2,
    //   name:"fullname",
    //   type:"text",
    //   placeholder:"Full Name",
    //   errorMessage: "Enter Full Name",
    //   label:"Full Name",
    //   required: true
    // },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage: "It should be a valid email",
      label:"Email",
      required: true
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 numbe and 1 dpecial character",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
      required: true
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage: "Passwords don't match",
      label:"Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  // console.log(values)

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we don't write above code, it will refresh every time
    // you click subit button

  }
  return <div className='app'>
    <form onSubmit={handleSubmit}>
      {inputs.map((input=> (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
      )))}
      <button>Submit</button>
    </form>
  </div>
}

export default App;
