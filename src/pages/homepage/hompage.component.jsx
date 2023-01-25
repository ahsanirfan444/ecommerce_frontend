import React from "react";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <img 
   
    src="http://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" width="90%"height="500">
    </img>
    <h1  onClick={()=> window.location.replace('http://localhost:3000/shop')}>Shop Now</h1>
    {/* <Directory /> */}
  </div>
);

export default HomePage;
