import { useEffect, useState } from "react";
import useMediaQuery from "../../../useMediaQuery";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import classes from "./HeaderNav.module.scss";

const HeaderNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 45em)");
  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isDesktop) {
      setNavOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      {navOpen && <div className={classes.overlay} />}
      <div className={`${navOpen && classes.openNav}`}>
        {!isDesktop && <HamburgerMenu navOpen={navOpen} onClick={toggleNav} />}
        {(navOpen || isDesktop) && (
          <ul className={classes.nav}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default HeaderNav;
