import React from 'react'
import './Slider.css';
import leftArrow from './icons/left_icon.svg';
import rightArrow from './icons/right_icon.svg';

export default function BtnSlider({direction, moveSlide}) {

  return (
    <div
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </div>
  );
}
