import { motion, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Spring animation parameters
const spring = {
    type: "spring",
    stiffness: 300,
    damping: 40,
};

export function withClick(Component) {
    return function WrappedComponent(props) {
        const [isFlipped, setIsFlipped] = useState(false);

        const handleClick = () => {
            setIsFlipped((prevState) => !prevState);
        };

        const [rotateXaxis, setRotateXaxis] = useState(0);
        const [rotateYaxis, setRotateYaxis] = useState(0);
        const ref = useRef(null);

        const handleMouseMove = (event) => {
            const element = ref.current;
            const elementRect = element.getBoundingClientRect();
            const elementWidth = elementRect.width;
            const elementHeight = elementRect.height;
            const elementCenterX = elementWidth / 2;
            const elementCenterY = elementHeight / 2;
            const mouseX = event.clientY - elementRect.y - elementCenterY;
            const mouseY = event.clientX - elementRect.x - elementCenterX;
            const degreeX = (mouseX / elementWidth) * 20;
            const degreeY = (mouseY / elementHeight) * 20;
            setRotateXaxis(degreeX);
            setRotateYaxis(degreeY);
        };

        const handleMouseEnd = () => {
            setRotateXaxis(0);
            setRotateYaxis(0);
        };

        const dx = useSpring(0, spring);
        const dy = useSpring(0, spring);

        useEffect(() => {
            dx.set(-rotateXaxis);
            dy.set(rotateYaxis);
        }, [rotateXaxis, rotateYaxis]);

        return (
            <motion.div
                onClick={handleClick}
                transition={spring}
                style={{
                    perspective: "1200px",
                    transformStyle: "preserve-3d",
                    width: `${props.width}`,
                    height: `${props.height}`,
                }}
            >
                <motion.div
                    ref={ref}
                    whileHover={{ scale: 1.1 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseEnd}
                    transition={spring}
                    style={{
                        width: "100%",
                        height: "100%",
                        rotateX: dx,
                        rotateY: dy,
                    }}
                >
                    <Component
                        {...props}
                        isFlipped={isFlipped}
                        style={{
                            width: "100%",
                            height: "100%",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.6s",
                            transform: isFlipped
                                ? "rotateY(180deg)"
                                : "rotateY(0deg)",
                        }}
                    />
                </motion.div>
            </motion.div>
        );
    };
}
