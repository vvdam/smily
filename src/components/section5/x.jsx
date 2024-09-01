import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { withClick } from "./x2.jsx";
import "./cardsection.css";

const Card = ({ isFlipped, frontImageSrc, backImageSrc, style }) => (
    <div className="card" style={style}>
        <div
            className="card-face card-front"
            style={{ backfaceVisibility: "hidden" }}
        >
            <img src={frontImageSrc} alt="Recto" className="card-image" />
            <div className="card-text">Recto de la carte</div>
        </div>
        <div
            className="card-face card-back"
            style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
            }}
        >
            <img src={backImageSrc} alt="Verso" className="card-image" />
            <div className="card-text">Verso de la carte</div>
        </div>
    </div>
);

const EnhancedCard = withClick(Card);

const ScrollingCardSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Définissez ici les points de début et de fin du mouvement
    const startMove = 0;
    const endMove = 0.5; // La carte s'arrête à mi-chemin du défilement

    const cardX = useTransform(
        scrollYProgress,
        [startMove, endMove, 1],
        ["-50%", "0%", "10%"]
    );

    const frontImageSrc =
        "https://preview.redd.it/goofy-ass-monke-v0-iffz3ve4ehjb1.jpg?width=1080&crop=smart&auto=webp&s=558b57d6753e8b9f8bd464cca98f960a085dcc63";
    const backImageSrc =
        "https://i.pinimg.com/564x/ba/af/cc/baafccb9913986594525e36d9bfbdd2c.jpg";

    return (
        <section ref={sectionRef} className="scrolling-section">
            <div className="content-wrapper">
                <motion.div className="card-container" style={{ x: cardX }}>
                    <div className="card-wrapper">
                        <EnhancedCard
                            width="100%"
                            height="100%"
                            frontImageSrc={frontImageSrc}
                            backImageSrc={backImageSrc}
                        />
                        <p>cliquer sur ma carte</p>
                    </div>
                </motion.div>
                <div className="text-content">
                    <h2>Titre de la section</h2>
                    <p>
                        Voici le paragraphe sur la droite. Vous pouvez ajouter
                        autant de contenu que nécessaire ici.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ScrollingCardSection;
