import React from "react";
import Slider from "react-slick";
// styles 
import carouselStyle from './carousel.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Landing from "../Landing";


const LandingSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      cssEase: 'linear',
      className: `${carouselStyle.landingSlide}`,
      dotsClass: `${carouselStyle.landingDots}`
    };
    const arr = [1,2,3,4]
    return (
        <>
        <div className={carouselStyle.carouselWrap}>
            <Slider {...settings}>
                {
                    arr.map(function(item, index) {
                        return (
                            <div key={index}>
                                <div className={carouselStyle.innerSlide}>
                                    <Landing counter={item} />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
        </>
    );
}

export default LandingSlider;