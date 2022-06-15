import React from "react";
import {Link} from "react-router-dom";
import { motion} from "framer-motion";

export function Home(){
    return (
        <motion.div className="home container"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5,duration:1.5}}
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button
                    whileHover={{scale:1.1}}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}