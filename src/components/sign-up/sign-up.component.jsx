import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utlis';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      userType:'',
      confirmPassword: '',
    };
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const { displayName, email, password, confirmPassword } = this.state;
  //   if (password !== confirmPassword) {
  //     alert("Password don't match");
  //     return;
  //   }

  //   try {
  //     const { user } = await auth.createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );

  //     createUserProfileDocument(user, { displayName });

  //     this.setState({
  //       displayName: '',
  //       email: '',
  //       buyer: '',
  //       seller:'',
  //       password: '',
  //       confirmPassword: '',
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  handleChange = (event) => {
    //alert("radioButton:"+event.target.value)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  

  render() {
    
    const SignUp=(e)=>{
      var formdata = new FormData();
    formdata.append("email", this.state.email);
    formdata.append("first_name", this.state.displayName);
    formdata.append("user_type", this.state.userType);
    formdata.append("password", this.state.password);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000//create_user/", requestOptions)
      .then(response => response.json())
      .then(result => {console.log("result",result)
      console.log("result data",result.data)
    if(result.data != ""){
      alert("user created successfully")
      // return window.location.replace('http://localhost:3000/Home');
    }else{
      return alert(result.data.error)
    }
    })
      .catch(error => alert("error",error)
      
      );
      
    }
    
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        {/* <form className="sign-up-form" onSubmit={this.handleSubmit}> */}
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Display Name"
            onChange={this.handleChange}
            required={true}
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
            required={true}
          />
          
          <label>
            User type:
            <select onChange={this.handleChange} name='userType'>
              <option value='buyer'>Buyer</option>
              <option value='seller'>Seller</option>
            </select>
          </label>
          
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
            required={true}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required={true}
          />
          <CustomButton onClick={SignUp}>SIGN UP</CustomButton>
        {/* </form> */}
      </div>
    );
  }
}

export default SignUp;
