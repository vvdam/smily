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
import ScrollingCardSection from "./components/section5/x";
import Inspiration from "./section 6/inpso";

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

    // const Section_2 = ({ scrollYProgress }) => {
    //     const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    //     const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    //     return (
    //         <motion.div style={{ scale, rotate }} className="sticky-section">
    //             <Section2 />
    //         </motion.div>
    //     );
    // };

    return (
        <>
            <section ref={container}>
                <Section_1 scrollYProgress={scrollYProgress} />
                <ScrollingCardSection />
            </section>
            <section>
                <Section3 />
            </section>
            <div style={{ width: "100%", overflow: "hidden" }}>
                <div className="deco">
                    <i className="fas fa-chevron-left deco-icon"></i>
                    <h3>About Me</h3>
                    <i className="fas fa-chevron-right deco-icon"></i>
                </div>
            </div>

            <section>
                <Section4 />
            </section>
            <Inspiration />
        </>
    );
}

export default App;
