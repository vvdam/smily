import { useState } from "react";
import { motion } from "framer-motion";
import "./landing.css";
import useMousePosition from "./mousePosition";

export default function Section1() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 500 : 200;

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
            </motion.div>

            {/* <div className="body">
                <p>
                    I'm a <span>selectively skilled</span> product designer with
                    strong focus on producing high quality & impactful digital
                    experience.
                </p>
            </div> */}
        </main>
    );
}
