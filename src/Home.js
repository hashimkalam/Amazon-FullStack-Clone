import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684200_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1231521452"
            title="The Lean Startup"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="264133522"
            title="kMix Stand Mixer Pastel Blue KMX754PB"
            price={249.99}
            rating={4}
            image="https://dam.kenwoodworld.com/562x468/assets/222888"
          />
          <Product
            id="264133522"
            title="W820NB Plus Wireless Noise Cancellation Over-Ear Headphones"
            price={149.99}
            rating={4}
            image="https://new-edifier-us-oss.edifier.com/images/20230328/d355c57c4f4a47b7f109c7f6bd50ee20.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="0224215542"
            title="iberlupus MMA Gloves for Men & Women, MMA"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71gjEhPYNIL._AC_SX425_.jpg"
          />
          <Product
            id="2524852752"
            title="Introducing Echo Pop | Sound compact smart speaker with Alexa"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41hc6XqAqrL._AC_SX425_.jpg"
          />
          <Product
            id="2524852752"
            title="Aestoria Orbit Watch Winder - Silver Single Watch Winders"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Fan33WLpL._AC_UX466_.jpg"
          />
          <Product
            id="257265555"
            title="New Apple iPad Pro"
            price={88.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="918425121"
            title="Samsung Curved LED Gaming Monitor"
            price={1099.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
