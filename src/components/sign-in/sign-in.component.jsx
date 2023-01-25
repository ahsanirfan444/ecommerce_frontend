import React from 'react';
import { useState } from 'react';
import { Redirect, Route } from "react-router";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import HomePage from '../../pages/homepage/hompage.component';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utlis';

class SignIn extends React.Component {

  // const [password,setPassword] = useState("")
  // const [password,setPassword] = useState("")

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  
  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const { email, password } = this.state;

  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     this.setState({ email: '', password: '' });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  

  render() {

  
const login=()=>{
  var formdata = new FormData();
formdata.append("email", this.state.email);
formdata.append("password", this.state.password);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000//api_token_auth/", requestOptions)
  .then(response => response.json())
  .then(result => {console.log("result",result)
  console.log("result data",result.data)
if(result.data != ""){
  alert("Login Successfully")
  if(result.data.user_type == "seller"){
    return window.location.replace('http://localhost:3000/addProduct');
  }else if(result.data.user_type == "buyer"){
    return window.location.replace('http://localhost:3000/Home');
  }
}
alert("Invalid Credential, please Enter valid email password")
})
  .catch(error => alert('somethig wont worng', error));
}

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        {/* <form > */}
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required={true}
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required={true}
          />

            {/* <button onClick={login}>Sign In</button> */}
          <div className="buttons">
            <CustomButton onClick = {login} type="submit">Sign In</CustomButton>

            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton> */}
          </div>
        {/* </form> */}
      </div>
    );
  }
}

export default SignIn;

// Sign in with Email and Password
