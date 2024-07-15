import { useState } from "react";
import { motion } from "framer-motion";
import "../Section1/landing.css";
import useMousePosition from "../Section1/mousePosition";
import { FaAnglesDown } from "react-icons/fa6";

export default function Section1() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 600 : 300;

    return (
        <main className="main">
            <motion.div
                className="mask"
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.8,
                }}
            >
                <p
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                >
                    A front-end developer who loves creating sleek interfaces
                    that users adore. Let’s make websites that are as cool to
                    use as they are to look at.
                </p>
                <FaAnglesDown className="arrow" />
            </motion.div>

            <div className="body">
                <p>
                    A front-end developer who loves creating sleek interfaces
                    that users adore. Let’s make websites that are as cool to
                    use as they are to look at.
                </p>
                <FaAnglesDown className="arrow" />
            </div>
        </main>
    );
}
