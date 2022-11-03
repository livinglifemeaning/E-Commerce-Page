import {useState } from "react";
import CartItem from "./CartItem/CartItem";
import CartIcon from "./icon-cart.svg";
import classes from "./Cart.module.scss";


const Cart = ({cartItems, handleCartItems}) => {
  const [cartOpen, setCartOpen] = useState(false);
  
  
 
  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.cart}>
      <span className={classes.cartButton} onClick={toggleCart}>
        <img src={CartIcon} alt="Cart" />
        </span>
        {cartOpen && (
          <div className={classes.cartCard}>
            <p className={classes.heading}>Cart</p>
            <div className={classes.divider} />
            {cartItems === 0 ? <p className={classes.empty}>Your cart is empty.</p> : <CartItem cartItems={cartItems} handleCartItems={handleCartItems}/>} 
          </div>
        )}
      
    </div>
  );
};

export default Cart;
