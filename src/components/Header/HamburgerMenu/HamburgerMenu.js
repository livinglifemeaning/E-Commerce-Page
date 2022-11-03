import classes from "./HamburgerMenu.module.scss"

const HamburgerMenu = (props) => {
  return (
    <div
    className={`${classes.menuBtn} ${props.navOpen ? classes.open : ""}`}
    onClick={props.onClick}
  >
    <div className={classes.menuBtnBurger}></div>
  </div>
  )
}

export default HamburgerMenu
