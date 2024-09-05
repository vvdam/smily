import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { withClick } from "./x2.jsx";
import "./cardsection.css";
import vcard_front from "../../assets/cartedevisiteface2.png";
import vcard_back from "../../assets/cartedevisiteback.png";

const Card = ({
    isFlipped,
    frontImageSrc,
    backImageSrc,
    style,
    rotateX,
    rotateY,
}) => {
    const shadowX = useTransform(rotateY, [-20, 20], [-10, 10]);
    const shadowY = useTransform(rotateX, [-20, 20], [-10, 10]);

    return (
        <motion.div
            className="card"
            style={{
                ...style,
                boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3)`,
            }}
        >
            <div
                className="card-face card-front"
                style={{ backfaceVisibility: "hidden" }}
            >
                <img src={frontImageSrc} alt="Recto" className="card-image" />
            </div>
            <div
                className="card-face card-back"
                style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                }}
            >
                <img src={backImageSrc} alt="Verso" className="card-image" />
            </div>
        </motion.div>
    );
};

const EnhancedCard = withClick(Card);

const TextAnimation = ({ isFlipped }) => {
    const controls = useAnimation();
    const [content, setContent] = useState([
        { text: "Ligne 1 du recto" },
        { text: "Ligne 2 du recto" },
        { text: "Ligne 3 du recto" },
    ]);

    useEffect(() => {
        const newContent = isFlipped
            ? [
                  { text: "Let's connect and create!", type: "header" },
                  {
                      text: "+33-07-77-86-81-47",
                      href: "tel:+33077786814",
                  },
                  {
                      text: "maaalouladam@gmail.com",
                      href: "mailto:maaalouladam@gmail.com",
                  },
                  {
                      text: "linkedin/Adam Maaloul",
                      href: "https://www.linkedin.com/in/adam-maaloul-17564026a/",
                  },
                  {
                      text: "twitter/vdam_mp4",
                      href: "https://x.com/vdam_mp4",
                  },
                  {
                      text: "github/vvdam",
                      href: "https://github.com/vvdam",
                  },
              ]
            : [
                  { text: "Ligne 1 du recto" },
                  { text: "Ligne 2 du recto" },
                  { text: "Ligne 3 du recto" },
              ];

        setContent(newContent);
        controls.start("visible");
    }, [isFlipped, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            key={isFlipped ? "back" : "front"}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {content.map((item, index) => (
                <motion.div key={index} variants={lineVariants}>
                    <p
                        className={
                            item.type === "header" ? "contact-header" : ""
                        }
                    >
                        {item.icon && (
                            <item.icon
                                size={18}
                                style={{
                                    marginRight: "8px",
                                    verticalAlign: "middle",
                                }}
                            />
                        )}
                        {item.href ? (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.text}
                            </a>
                        ) : (
                            item.text
                        )}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
};
const ScrollingCardSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const startMove = 0;
    const endMove = 0.5;

    const cardX = useTransform(
        scrollYProgress,
        [startMove, endMove, 0.7, 1],
        ["-100%", "10%", "10%", "-100%"]
    );

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section ref={sectionRef} className="scrolling-section">
            <div className="content-wrapper">
                <motion.div className="card-container" style={{ x: cardX }}>
                    <div className="card-wrapper">
                        <EnhancedCard
                            width="100%"
                            height="100%"
                            frontImageSrc={vcard_front}
                            backImageSrc={vcard_back}
                            isFlipped={isFlipped}
                            setIsFlipped={setIsFlipped}
                        />
                        <p className="gray">Cliquer sur ma carte</p>
                    </div>
                </motion.div>
                <div className="text-content">
                    <TextAnimation isFlipped={isFlipped} />
                </div>
            </div>
        </section>
    );
};

export default ScrollingCardSection;
