import { Carousel } from "antd";
import "./style.scss";
import Btn from "./../UI/Svg/Btn";

const contentStyle = {
  height: "160px",
};

const index = () => {
  const onChange = (currentSlide) => {
    console.log();
  };
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav__wrapper">
            <h1>STORK TOUR</h1>
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Путешествия</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>

            <select>
              <option selected disabled>
                RUS
              </option>
              <option>UZB</option>
              <option>ENG</option>
            </select>

            <button className="menu">
              <Btn />
            </button>
          </div>
        </nav>

        <div className="header__carousel">
          <Carousel
            autoplay={true}
            dotPosition="right"
            afterChange={onChange}
            className="carousel__H"
          >
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
          </Carousel>
        </div>

        <div className="header__carousel1">
          <Carousel
            autoplay={true}
            dotPosition="none"
            afterChange={onChange}
            className="carousel__H1"
          >
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
            <div style={contentStyle}>
              <h3>Лучшие туры по Узбекистану</h3>
              <p>Мы предлагаем вам незабываемое путешествие</p>
            </div>
          </Carousel>
        </div>
      </div>
    </header>
  );
};

export default index;
