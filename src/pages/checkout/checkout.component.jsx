import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import './checkout.styles.scss'
import { useState, } from 'react';

const CheckoutPage = ({ match }) =>{
  const [card, setCard] = useState([])

  useEffect(() => {
    productData();
}, []);


  const productData= async()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000//api/products/c4540a13-6635-4d6b-a003-902ba6fdc68a/detail-view/camera/",requestOptions)
  
        .then(response => {
          return response.json()
        })
        .then(data => { 
          setCard(data)
        })
    }

return(
  <div>
  <div className="checkout-page">
<div className="checkout-header">
  <div className="header-block">
    <span>Product</span>
    <img src={card.image} style={{width:100,height:100,margin:5}}/>
  </div>

  <div className="header-block">
    <span>Description</span>
  </div>

  <div className="header-block">
    <span>Quantity</span>
  </div>

  <div className="header-block">
    <span>Price</span>
    <h4>{card.price}</h4>
  </div>

  <div className="header-block">
    <span>Remove</span>
  </div>
</div>
</div>

<div className="total">
      <span>TOTAL: ${card.price}</span>
    </div>
</div>

)
}

export default CheckoutPage;
