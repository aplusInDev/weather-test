import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // console.log(carouselRef.current.scrollWidth);
    // console.log(carouselRef.current.offsetWidth);
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div className="carousel" ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {/* <motion.div className="item" />
          <motion.div className="item" />
          <motion.div className="item" /> */}
          <motion.div className="item" />
          <motion.div className="item" />
          <motion.div className="item" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carousel;
