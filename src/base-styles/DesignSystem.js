import classes from "./DesignSystem.module.scss";

const DesignSystem = () => {
  return (
    <div className={classes.designSystem}>
      <h1>Design System</h1>
      <p className={classes.header}>Fall Limited Sneakers</p>
      <p className={classes.bodyText}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <ul className={classes.nav}>
        <li>Collections</li>
        <li>Men</li>
      </ul>
      <button className={classes.button}>Checkout</button>
    </div>
  );
};

export default DesignSystem;
