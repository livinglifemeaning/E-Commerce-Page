import { useEffect, useState } from "react";
import useMediaQuery from "../../../useMediaQuery";
import classes from "./ImageGallery.module.scss";
import { Arrows, Images, Thumbnails } from "../Images/Images";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [amountOfImages, setAmountofImages] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 45em)");

  // Closes modal on mobile screens
  useEffect(() => {
    isDesktop && setModalOpen(false);
  }, [isDesktop]);

  // Changes image being displayed
  const changeImageHandler = (num) => {
    if (activeIndex === 0 && num === -1) {
      setActiveIndex(amountOfImages - 1);
    } else if (activeIndex === amountOfImages - 1 && num === 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + num);
    }
  };

  // Renders Images, thumbnails, and modal 
  return (
    <>
      <div className={classes.gallery}>
        <div className={classes.imagesBox} onClick={() => setModalOpen(true)}>
          <Images
            activeIndex={activeIndex}
            setAmountofImages={setAmountofImages}
          />
        </div>

        {!isDesktop && (
          <div className={classes.arrowBox}>
            <Arrows changeImageHandler={changeImageHandler} />
          </div>
        )}

        {isDesktop && (
          <div className={classes.thumbnailsBox}>
            <Thumbnails
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
        )}
      </div>

      {isDesktop && modalOpen && (
        <ImageModal
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          changeImageHandler={changeImageHandler}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default ImageGallery;
