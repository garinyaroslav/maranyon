import React from 'react';
import Slider from 'react-slick';

import { ProductBlock } from '../ProductBlock';

import styles from './Slick.module.scss';
import './slick.scss';
import './slick-theme.scss';

export const Slick = () => {
  const [hasSetPosition, setHasSetPosition] = React.useState(false);
  const slider = React.useRef(null);
  const initialSlidePosition = 1;

  React.useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlidePosition);
      setHasSetPosition(true);
    }
  }, [initialSlidePosition, hasSetPosition, slider]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.root}>
      <Slider ref={slider} className={styles.slider} {...settings}>
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
      </Slider>
    </div>
  );
};
