import React from 'react';
import ReactDOM from 'react-dom';
import logoMain from './images/logoMain.png';
import orderNowArrow from './images/orderNowArrow.png';
import flyingman from './images/flyingman.png'; 
import ProductSection from './productsection/ProductSection';

function LandingPage() {
  return (
    <div className="App">
      {/* header*/}
      <div className="header">
        <div className="left-panel">
          <img src={logoMain} className="logo" />
          <div className="btn-wrapper">
            <button className="btn primary-btn">click here to &nbsp; <span className="bold-orderNow"> <a href="https://wa.link/di6nro">order now </a></span>  &nbsp;  &nbsp;  &nbsp;  <img src={orderNowArrow} className="orderNowArrow" /></button>
          </div>
        </div>
        {/* <div className="right-panel"> */}
          <img src={flyingman} className="rocket"/>
        {/* </div> */}
      </div>
      {/* header*/}

      <div className="catalogue-banner">
        <span>New product catalogue <span className="bold-orderNow"> every month</span></span>
      </div>
        <ProductSection/>
    <footer>
      <p className="footer-text"><span className="bold-orderNow">click on the </span>social media icons</p>
      <div className="icons">dfs sdf dfs</div>
    </footer>
    </div>
  );
}

export default LandingPage;
