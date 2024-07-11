import img from "../../assets/1.jpg";
import "./section2.css";
export default function Section2() {
    return (
        <>
            <h3>Hello</h3>
            <div className="flex-container">
                <p>My name is</p>
                <div className="image-container">
                    <img
                        style={{
                            position: "relative",
                            height: "8vh",
                            width: "12.5vw ",
                        }}
                        src={img}
                        alt="img"
                    />
                </div>
                <p>☺︎</p>
            </div>
            <h3>Hello</h3>
            <div className="flex-container">
                <p>My name is</p>
                <div className="image-container">
                    <img
                        style={{
                            position: "relative",
                            height: "8vh",
                            width: "12.5vw ",
                        }}
                        src={img}
                        alt="img"
                    />
                </div>
                <p>☺︎</p>
            </div>
            <h3>Hello</h3>
            <div className="flex-container">
                <p>My name is</p>
                <div className="image-container">
                    <img
                        style={{
                            position: "relative",
                            height: "8vh",
                            width: "12.5vw ",
                        }}
                        src={img}
                        alt="img"
                    />
                </div>
                <p>☺︎</p>
            </div>
            <h3>Hello</h3>
            <div className="flex-container">
                <p>M’name is ADAM</p>
                {/* <div className="image-container">
                    <img
                        style={{
                            position: "relative",
                            height: "8vh",
                            width: "12.5vw ",
                        }}
                        src={img}
                        alt="img"
                    />
                </div> */}
                <p>☺︎</p>
            </div>
        </>
    );
}
