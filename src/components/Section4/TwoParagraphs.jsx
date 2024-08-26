import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import "./section4.css";

const TwoParagraphs = ({ leftPhrases, rightPhrases }) => {
    const ref = React.useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, {
        once: false,
        margin: "-10% 0px",
    });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 0.5,
            y: 0,
            transition: {
                delay: 0.5, // Delay the subtitle animation
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const renderParagraph = (phrases) => (
        <div>
            {phrases.map((phrase, index) => (
                <motion.p key={index} variants={lineVariants}>
                    {phrase}
                </motion.p>
            ))}
        </div>
    );

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="paragraphs-container"
        >
            <div>
                {renderParagraph(leftPhrases)}
                <a href="https://fr.wikipedia.org/wiki/Alberto_Giacometti">
                    <motion.p className="subtitle" variants={subtitleVariants}>
                        Alberto Giacometti
                    </motion.p>
                </a>
            </div>
            {renderParagraph(rightPhrases)}
        </motion.div>
    );
};

TwoParagraphs.propTypes = {
    leftPhrases: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightPhrases: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TwoParagraphs;
