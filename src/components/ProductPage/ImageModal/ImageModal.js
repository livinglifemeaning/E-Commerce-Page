import ReactDOM from "react-dom";
import { Images, Thumbnails, Arrows } from "../Images/Images";
import CloseIcon from "./icon-close.svg"
import classes from "./ImageModal.module.scss";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const portalElement = document.getElementById("overlays");

const ImageModal = ({ activeIndex, setActiveIndex, changeImageHandler, setModalOpen }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <span className={classes.close}><img src={CloseIcon} alt="Close modal" onClick={() => setModalOpen(false)} /></span>
          <div className={classes.images}>
            <Images activeIndex={activeIndex} />
            <div className={classes.arrows}>
              <Arrows changeImageHandler={changeImageHandler} />
            </div>
          </div>
          <div className={classes.thumbnails}>
            <Thumbnails
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default ImageModal;
