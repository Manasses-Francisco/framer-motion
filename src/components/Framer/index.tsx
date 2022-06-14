import React from "react";
import {motion,useViewportScroll, useTransform} from "framer-motion";
import "./style.css";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
/*

export function Framer(){
    return (
        <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.li key={index} className="item" variants={item} />
        ))}
      </motion.ul>
    )
}

*/

export function Framer(){

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="wrapper">
        <motion.div
          className="container"
          style={{
            scale
          }}
        >

            
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress
            }}
          />
        </motion.div>
      </div>
    )
}