import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import TextPressure from "./TextPressure";
import TextShuffle from "./TextShuffle";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              <TextShuffle text="Ihtesham" />
              <br />
              <span><TextShuffle text="Ahmad" /></span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A MERN</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1" style={{ fontSize: "0.9em" }}>
                <TextPressure text="Stack" />
              </div>
            </h2>
            <h2>
              <div className="landing-h2-info">
                <TextPressure text="Developer" />
              </div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
