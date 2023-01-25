import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux/es/exports';

import { ReactComponent as Logo } from '..//..//assets/logo.svg';
import { auth } from '../../firebase/firebase.utlis';
import CartIcon from '../cart-icon/cart-icon.component';

import './header-styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.select';
import { createCartHidden } from '../../redux/cart/cart.reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/Home">
      <Logo className="logo" />
    </Link>


    <div className="options">

      <Link className="option" to="Home">
          HOME
        </Link>

      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/addProduct">
        ADD PRODUCT
      </Link>
      <Link className="option" to="/">
          SIGN OUT
        </Link>
       
    
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: createCartHidden,
});

export default connect(mapStateToProps)(Header);
