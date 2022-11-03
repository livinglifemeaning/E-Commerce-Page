import SneakerThumbnail from "./image-product-1-thumbnail.jpg"
import DeleteIcon from "./icon-delete.svg"
import classes from "./CartItem.module.scss"

const CartItem = ({cartItems, handleCartItems}) => {
  return (
    <div className={classes.cartItems}>
      <div className={classes.productInfo}>
      <img src={SneakerThumbnail} alt="" className={classes.thumbnail}/>
      <div>
        <p className={classes.itemName}>Fall Limited Edition Sneakers</p>
        <p className={classes.price}>$125.00 x {cartItems} <span className={classes.totalPrice}>${cartItems * 125}.00</span></p>
      </div>
      <img className={classes.delete} src={DeleteIcon} alt="Delete cart items" onClick={()=> handleCartItems(undefined, "delete")}/> 
      </div>
      <button className={classes.button}>Checkout</button>
    </div>
  )
}

export default CartItem
