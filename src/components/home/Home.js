import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="12469416"
          title="Console - Nintendo Switch Modelo 2019, 6.2'', Joy-Con, Gris"
          price={329.99}
          rating={4}
          image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74254776/fee_325_225_png/Consola---Nintendo-Switch-Modelo-2019--6.2%22--Joy-Con--Gris"
        />
        <Product
          id="12321341"
          title="The Lean Startup: Now Constant Innovation Creates Radically Succesful Business PaperClicks."
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="The Last of Us Part II PS4"
          price={54.99}
          rating={5}
          image="https://static.fnac-static.com/multimedia/Images/FR/NR/2c/c4/81/8504364/1540-1/tsp20190930135142/The-Last-of-Us-2-PS4.jpg"
        />
        <Product
          id="12321341"
          title="Thermomix, el robot de cocina"
          price={669.99}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO_L2hleW5_cO3SLAImYacQfFZDkzxQ_2Y3w&usqp=CAU"
        />{" "}
        <Product
          id="12321341"
          title="Yoga resistance elastic"
          price={8.96}
          rating={5}
          image="https://ae01.alicdn.com/kf/Hf50921dfa63f48c8b8152fa89dd6ec70g/FDBRO-Yoga-r-sistance-lastique-Sport-formation-bandes-lastiques-boucles-d-entra-nement-Latex-Yoga-gymnastique.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="Dyson V11 Absolute Extra"
          price={919.41}
          rating={5}
          image="https://876048.smushcdn.com/1949885/wp-content/uploads/2020/04/V11-1140x877.jpg?lossy=1&strip=1&webp=1"
        />
      </div>
    </div>
  );
}

export default Home;
