import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import "./App.css";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import right from "./assets/right.svg";
import left from "./assets/left.svg";
import Section4 from "./components/Section4/Section4";

function App() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const Section_1 = ({ scrollYProgress }) => {
        const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
        const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
        return (
            <motion.div style={{ scale, rotate }}>
                <Section1 />
            </motion.div>
        );
    };

    const Section_2 = ({ scrollYProgress }) => {
        const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
        const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

        return (
            <motion.div style={{ scale, rotate }} className="sticky-section">
                <Section2 />
            </motion.div>
        );
    };

    return (
        <>
            <section ref={container}>
                <Section_1 scrollYProgress={scrollYProgress} />
                <Section_2 scrollYProgress={scrollYProgress} />
            </section>
            <section>
                <Section3 />
            </section>
            <div className="deco">
                <img src={right} className="left " alt="" />
                <h3
                    style={{
                        color: "red",
                        fontSize: "3rem",
                        textAlign: "center",
                        marginBottom: "10rem",
                    }}
                >
                    About Me
                </h3>
                <img src={right} className="right" alt="" />
            </div>

            <section>
                <Section4 />
            </section>
        </>
    );
}

export default App;
