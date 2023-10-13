import Atp1 from "../../assets/images/Intro1.png";
import Atp2 from "../../assets/images/Intro2.png";
import Atp3 from "../../assets/images/Intro3.png";
import Atp4 from "../../assets/images/Intro4.png";
import Atp5 from "../../assets/images/Intro5.png";
import Vd from "../../assets/Video/vd.mp4"
import "./style.scss";

const index = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="pct">
            <img src={Atp1} alt="Atp" />
            <img src={Atp2} alt="Atp" />
            <img src={Atp3} alt="Atp" />
            <img src={Atp4} alt="Atp" />
            <img src={Atp5} alt="Atp" />
          </div>

          <iframe
            width="100%"
            height="500"
            src={Vd}
            title="YouTube video player"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default index;
