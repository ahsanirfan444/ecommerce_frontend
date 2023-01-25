import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utlis';
import CurrencyInput from 'react-currency-input-field';

class AddProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      productTitle: '',
      productPrice: '',
      productDescription: '',
      productimageUrl: '',
      productCategory: '',
      file: null
    };
  }
   onSelectFile = (e) => {
    //= event.target.files;
    let file = e.target.files[0]
    this.setState({file:file})
    console.log("file",file)
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
  //       password: '',
  //       confirmPassword: '',
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };


  render() {
    

    

    const addProduct = event => {
      console.log(this.state.productTitle)
      console.log(this.state.productPrice)
      console.log(this.state.productDescription)
      console.log(this.state.productCategory)
      // const selectedFiles = event.target.files;
      // console.log(selectedFiles)
      var formdata = new FormData();
      formdata.append("title", this.state.productTitle);
      formdata.append("price", this.state.productPrice);
      formdata.append("description",this.state.productDescription );
      formdata.append('image',this.state.file)
      formdata.append("category",this.state.productCategory );
      
      
      //formData.append('userpic', myFileInput.files[0], 'system.jpg');
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://127.0.0.1:8000//api/products/add_product/", requestOptions)
        .then(response => response.json())
        .then(result => {console.log("result",result)
        console.log("result data",result.data)
      if(result.data != ""){
        alert("Product add successfully")
         return window.location.replace('http://localhost:3000/shop');
      }else{
        return alert(result.data.error)
      }
      })
        .catch(error => alert("error",error)
        
        );

    }

    
    //const { displayName, email, password, confirmPassword } = this.state;
    return (
      <center>
        <div className="sign-up">
          <h2 className="title">Add Product</h2>
          <span>add product by super user</span>
          <FormInput
            type="text"
            name="productTitle"
            value={this.state.productTitle}
            label="Enter product title"
            onChange={this.handleChange}
            required={true}
          />
          <FormInput
            type="number"
            name="productPrice"
            value={this.state.productPrice}
            label="Enter product price"
            onChange={this.handleChange}
            required={true}
          />
          {/* <CurrencyInput
            style={{ height: 50, width: '100%', outline: 0, marginBottom: 20 }}
            id="input-example"
            name="productPrice"
            prefix='$'
            value={this.state.productPrice}
            onChange={this.handleChange}
            placeholder="Enter product price"
            decimalsLimit={5}
            required={true}
          />

          <CurrencyInput
           style={{ height: 50, width: '100%', outline: 0, marginBottom: 20 }}
            id="input-example"
            name="productPrice"
           
            placeholder="Please enter a number"
            value={this.state.productPrice}
            onChange={this.handleChange}
            decimalsLimit={2}
            //onValueChange={(value, name) => console.log(value, name)}
          />; */}
          <FormInput
            type="text"
            name="productDescription"
            value={this.state.productDescription}
            label="Enter product Description"
            onChange={this.handleChange}
            required={true}
          />

          <section required={true} style={{ height: 60, width: '100%' }}>
            <label htmlFor='image'>
              Select Image
              <input type="file" name="image"  onChange={this.onSelectFile} />
            </label>
          </section>

          <FormInput
            type="text"
            name="productCategory"
            value={this.state.productCategory}
            label="Enter product category"
            onChange={this.handleChange}
            required={true}
          />


          <CustomButton onClick={addProduct} type="submit">Add Product</CustomButton>

        </div>
      </center>
    );
  }
}

export default AddProduct;
