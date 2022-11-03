import { useState, useEffect } from "react";
import Photo1 from "./product-images/image-product-1.jpg";
import Photo2 from "./product-images/image-product-2.jpg";
import Photo3 from "./product-images/image-product-3.jpg";
import Photo4 from "./product-images/image-product-4.jpg";
import Photo1Thumbnail from "./product-images/image-product-1-thumbnail.jpg";
import Photo2Thumbnail from "./product-images/image-product-2-thumbnail.jpg";
import Photo3Thumbnail from "./product-images/image-product-3-thumbnail.jpg";
import Photo4Thumbnail from "./product-images/image-product-4-thumbnail.jpg";
import classes from "./Images.module.scss";


const PRODUCT_IMAGES = [Photo1, Photo2, Photo3, Photo4];
const PRODUCT_THUMBNAILS = [
  Photo1Thumbnail,
  Photo2Thumbnail,
  Photo3Thumbnail,
  Photo4Thumbnail,
];

const Image = ({ isActive, index }) => {
  return (
    <li className={isActive ? classes.active : classes.inactive}>
      <img src={PRODUCT_IMAGES[index]} alt="Fall Edition Sneakers" />
    </li>
  );
};

const Thumbnail = ({ isActive, index, setActiveIndex }) => {
  return (
    <li
      className={isActive ? classes.active : classes.inactive}
      onClick={() => setActiveIndex(index)}
    >
      <img src={PRODUCT_THUMBNAILS[index]} alt="Fall Edition Sneakers" />
    </li>
  );
};

const Arrow = ({ changeImageHandler, type, num }) => {
  const [iconColor, setIconColor] = useState("#1D2026");
  return (
    <span
      onClick={() => changeImageHandler(num)}
      className={`${classes.arrow} ${type === "previous" && classes.previous}`}
      onMouseEnter={() => setIconColor("hsl(26, 100%, 55%)")}
      onMouseLeave={() => setIconColor("#1D2026")}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke={iconColor}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
};

export const Images = ({ activeIndex, setAmountofImages }) => {
  useEffect(() => {
    setAmountofImages && setAmountofImages(PRODUCT_IMAGES.length);
  }, [setAmountofImages]);
  return (
    <ul className={classes.images}>
      {PRODUCT_IMAGES.map((img, idx) => (
        <Image key={idx} isActive={activeIndex === idx} index={idx} />
      ))}
    </ul>
  );
};

export const Thumbnails = ({ activeIndex, setActiveIndex }) => {
  return (
    <ul className={classes.thumbnails}>
      {PRODUCT_THUMBNAILS.map((img, idx) => (
        <Thumbnail
          key={idx}
          isActive={activeIndex === idx}
          index={idx}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </ul>
  );
};

export const Arrows = ({changeImageHandler}) => {
  return (
    <>
      <Arrow type="previous" changeImageHandler={changeImageHandler}  num={-1}/>
      <Arrow changeImageHandler={changeImageHandler} num={1} />
    </>
  );
};
