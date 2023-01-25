import React from 'react';

import './sign-up-and-sign-in.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import AddProduct from '../../components/addProduct/add-product.component'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
    {/* <AddProduct/> */}
  </div>
);

export default SignInAndSignUpPage;

// Redux Introduction
