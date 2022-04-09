import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../Firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.css";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('user does not exist');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]:value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
      <div className="buttons-container">
        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle} buttonType='google'>Sign In with Google</CustomButton>
      </div>
      </form>
    </div>
  );
}

/*class SignIn extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email:'', password:'' })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGooglePopup} isGoogleSignIn>
              {' '}
              Sign In with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}*/

export default SignIn;