import ImageGallery from "./ImageGallery/ImageGallery";
import AddToCart from "../Cart/AddToCart/AddToCart";
import classes from "./ProductPage.module.scss";

const ProductPage = ({cartItems, handleCartItems}) => {
  return (
    <div className={classes.productPage}>
      <ImageGallery />
      <div className={classes.productInfo}>
        <p className={classes.companyName}>Sneaker Company</p>
        <h1 className={classes.productName}>Fall Limited Edition Sneakers</h1>
        <p className={classes.productDescription}>These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.</p>
        <div className={classes.priceBox}>
          <p className={classes.price}>$125.00</p>
          <p className={classes.discount}>50%</p>
          <p className={classes.originalPrice}>$250.00</p>
        </div>
        <AddToCart  handleCartItems={handleCartItems} cartItems={cartItems}/>
      </div>
    </div>
  );
};

export default ProductPage;
