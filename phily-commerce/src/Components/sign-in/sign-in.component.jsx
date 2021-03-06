import { useState } from "react";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../Firebase/firebase.utils";

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]:value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

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

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
        <CustomButton onClick={signInWithGoogle} type='button' buttonType='google'>Sign In with Google</CustomButton>
      </div>
      </form>
    </div>
  );
}

export default SignIn;