import React, { useState } from 'react'
import './galleryContainer.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'
import Modal from './Modal.jsx';
import one from "../../assets/VJMGalleryImages/1.jpg"
import two from "../../assets/VJMGalleryImages/2.jpg"
import three from "../../assets/VJMGalleryImages/3.jpg"
import four from "../../assets/VJMGalleryImages/4.jpg"
import five from "../../assets/VJMGalleryImages/5.jpg"
import six from "../../assets/VJMGalleryImages/6.jpg"
import seven from "../../assets/VJMGalleryImages/7.jpg"
import eight from "../../assets/VJMGalleryImages/8.jpg"
import nine from "../../assets/VJMGalleryImages/9.jpg"
import ten from "../../assets/VJMGalleryImages/10.jpg"


    const imageArr = [
     {
        img : one
     },
     {
        img : two
     },
     {
        img : three
     },
     {
        img : four
     },
     {
        img : five
     },
     {
        img : six
     },
     {
        img : seven
     },
     {
        img : eight
     },
     {
        img : nine
     },
     {
        img : ten
     },
     
    ]


const GalleryContainer = () => {
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);

    const handleClick = (i) => {
        setActive(i);
        setShow(true);
    }

    const onModalClose = () => {
        setShow(false);
    }


    const handleNext = () => {
        if (active < imageArr.length - 1) {
          setActive(active + 1);
        }
      };
    
      const handlePrev = () => {
        if (active > 0) {
          setActive(active - 1);
        }
      };
  return (
    <div className='galleryContainer'>
          <h3>VJM Gallery</h3>
      <img src={vectorDesign} className='middleImg'/>

        <div className="gallerymainContainer">
        {imageArr.map((e,i)=> {
            return (
                <>
                    <div 
                        // key={idx}
                        className={i === active ? "active" : ""}
                        onClick={() => handleClick(i)}
                    >
                        <img  src={e.img}/>

                    </div>
                
                </>
            )
        })}
        </div>

        <Modal show={show} onModalClose={onModalClose}>
            <ImageSlider active={active} onNext={handleNext} onPrev={handlePrev} />
        </Modal>

    </div>
  )
  
}

const ImageSlider = ({ active, onNext, onPrev }) => {
    return (
      <div className="image-slider-wrapper">
        <div className="image-slides">
          {imageArr.map((e, i) => (
            <Slides {...e}  active={i === active} />
          ))}
        </div>
        <div className="image-slider-navigation">
          <span className="image-navigation next" onClick={onNext}>
            &gt;
          </span>
          <span className="image-navigation prev" onClick={onPrev}>
            &lt;
          </span>
        </div>
      </div>
    );
  };
  
  const Slides = ({ img, active }) => {
    console.log(img)
    return (
      <div className={`image-slide`}>
        <img src={img}  className={active ? "active" : ""} />
      </div>
    );
  };

export default GalleryContainer