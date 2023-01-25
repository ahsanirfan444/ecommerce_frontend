import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router';
import collectionPage from '../collection/collection.component';
import { useEffect } from 'react';
import { useState,image,flex } from 'react';
import userEvent from '@testing-library/user-event';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const ShopPage = ({id,slug }) => {
const [card, setCard] = useState([])
const [visible,setVisible] = useState(5)

  useEffect(() => {
    // call api or anything
    console.log("loaded");
    shopData()
 });

 let data
const shopData= async()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/api/products/list-view/",requestOptions)

      .then(response => {
        return response.json()
      })
      .then(data => {
        setCard(data)
      })
  }


  return (

    
    <div className="shop-page" style={{}}>
      
      {card.length > 0 && (
      <ol style={{display:'flex', flexDirection:'row',}}>

        {card.map(card => (
          <li>
            <center>
            <img src={card.image} style={{width:300,height:300,margin:10}}/>
            <br/>
            {card.title}
            <br/>
            Price: {card.price}
            <br/>
            <Button onClick={() => window.location.replace('http://localhost:3000/checkout'
            )}>Add to Card
            </Button>
            </center>
            </li>
           
        ))}
        
      </ol>
        )}
      
      {/* <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={collectionPage} /> */}
    </div>
  );
};
export default ShopPage;
