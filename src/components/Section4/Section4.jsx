import TwoParagraphs from "./TwoParagraphs";

export default function Section4() {
    const leftPhrases = [
        '"The object of art is not to reproduce reality',
        'but to create a reality of the same intensity."',
    ];

    const rightPhrases = [
        " My name is Adam,",
        "20-year-old web developer",
        "currently seeking an apprenticeship.",
        "",
        "Passionate about art and design,",
        "I'm determined to refine my skills",
        "in a dynamic and innovative environment.",
        "",
        // "I'm driven by creating",
        // "elegant and intuitive interfaces,",
        // "with a strong focus on details",
        // "and user experience.",
        // "If you're looking for a creative",
        // "and dedicated collaborator",
        // "to enrich your team,",
        // "I'd be delighted to meet you!"
    ];

    return (
        <section className="container-s-4">
            <TwoParagraphs
                leftPhrases={leftPhrases}
                rightPhrases={rightPhrases}
            />
        </section>
    );
}
