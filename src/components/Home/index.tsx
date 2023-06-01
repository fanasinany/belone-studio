import * as React from "react";
import "./styles.scss";
import IcRoundArrowDownward from "../Icons/IcRoundArrowDownward";
import MaterialSymbolsContactSupportOutline from "../Icons/MaterialSymbolsContactSupportOutline";

const Home = () => {
  return (
    <section className="home">
      <div className="home_wrapper">
        <h2>
          <span>Building</span> stunning products, <br />
          creating attractive <span>brands.</span>
        </h2>
        <p>
          We specialize in creating visual identities for your company's
          products and brands.
        </p>
        <div className="button_grouped">
          <a href="#">
            About us <IcRoundArrowDownward/>
          </a>
          <a href="#">
            <MaterialSymbolsContactSupportOutline/> Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
