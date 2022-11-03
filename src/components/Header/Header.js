import HeaderNav from "./HeaderNav/HeaderNav";
import Cart from "../Cart/Cart";
import ProfilePic from "./image-avatar.png";
import Logo from "./logo.svg";
import classes from "./Header.module.scss";

const Header = ({handleCartItems, cartItems}) => {
  return (
    <div className={classes.header}>
      <img src={Logo} alt="Sneakers website logo" className={classes.logo} />
      <div className={classes.navBox}>
        <HeaderNav />
      </div>
      <div className={classes.cartBox}>
        <Cart handleCartItems={handleCartItems} cartItems={cartItems}/>
        <img className={classes.avatar} src={ProfilePic} alt="" />
      </div>
    </div>
  );
};

export default Header;
