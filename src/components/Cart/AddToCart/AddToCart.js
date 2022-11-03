import { useState } from "react";
import CartIcon from "./icon-cart.svg";
import classes from "./AddToCart.module.scss";

const Minus = () => {
  const [iconColor, setIconColor] = useState("#FF7E1B");
  return (
    <svg
      width="12"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseEnter={() => setIconColor("hsl(26 100% 55% / 75%)")}
      onMouseLeave={() => setIconColor("#FF7E1B")}
    >
      <defs>
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
        />
      </defs>
      <use fill={iconColor} fillRule="nonzero" xlinkHref="#a" />
    </svg>
  );
};

const Plus = () => {
  const [iconColor, setIconColor] = useState("#FF7E1B");

  return (
    <svg
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseEnter={() => setIconColor("hsl(26 100% 55% / 75%)")}
      onMouseLeave={() => setIconColor("#FF7E1B")}
    >
      <defs>
        <path
          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
          id="b"
        />
      </defs>
      <use fill={iconColor} fillRule="nonzero" xlinkHref="#b" />
    </svg>
  );
};
const AddToCart = ({ handleCartItems }) => {
  const [cartItems, setCartItems] = useState(0);
  const subtractCartItems = () => {
    if (cartItems !== 0) {
      setCartItems((prevState) => prevState - 1);
    }
  };
  return (
    <div className={classes.addToCart}>
      <div className={classes.selectItems}>
        <span className={classes.icon} onClick={subtractCartItems}>
          <Minus />
        </span>
        <span className={classes.itemNumber}>{cartItems}</span>
        <span
          className={classes.icon}
          onClick={() => setCartItems((prevState) => prevState + 1)}
        >
          <Plus />
        </span>
      </div>
      <button
        className={classes.addButton}
        onClick={() => {
          handleCartItems(cartItems);
        }}
      >
        <span>
          <img src={CartIcon} alt="" />
        </span>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
