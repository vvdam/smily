import "./section3.css";
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Index({ project }) {
    // Updated function name to start with an uppercase letter
    const [isActive, setIsActive] = useState(false);

    const anim = {
        initial: { width: 0 },
        open: {
            width: "auto",
            transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        },
        closed: { width: 0 },
    };

    const { title1, title2, src, link } = project;

    return (
        <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className="project"
        >
            <a href={link}>
                <p>{title1}</p>
                <motion.div
                    variants={anim}
                    animate={isActive ? "open" : "closed"}
                    className="imgContainer"
                >
                    <img src={src} alt={`${title1} image`}></img>
                </motion.div>
                <p>{title2}</p>
            </a>
        </div>
    );
}
Index.propTypes = {
    project: PropTypes.shape({
        title1: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};
