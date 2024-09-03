import "./section3.css";
import Project from "./Project";
import img1 from "../../assets/11.jpg";
import img2 from "../../assets/4.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/2.jpg";

export default function Section3() {
    const projects = [
        {
            title1: "OUT",
            title2: "!!!",
            src: `${img1}`,
            link: "https://out-silk-tau.vercel.app/",
        },
        {
            title1: "SOUND",
            title2: "WAVE",
            src: `${img2}`,
            link: "https://soundwave-app.fr/",
        },
        {
            title1: "WIZARD'S",
            title2: "CASTLE",
            src: `${img3}`,
            link: "https://wizard-s-castle.vercel.app/",
        },
        {
            title1: "GAMEBOY",
            title2: "ADVANCED",
            src: `${img4}`,
            link: "https://github.com/vvdam/Gameboy",
        },
        // {
        //     title1: "Mambo",
        //     title2: "Mambo",
        //     src: `${img5}`,
        // },
    ];

    return (
        <main className="main3">
            <div className="gallery">
                <p>Some Of My Work</p>

                {projects.map((project) => {
                    return <Project key={project} project={project} />;
                })}
            </div>
        </main>
    );
}
