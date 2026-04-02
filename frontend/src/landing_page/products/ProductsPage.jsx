import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ulta-fast trading platform with streaming market data,
        advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your
        Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your
         trades and inverstments with in-depth reports and visualistions."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds onlin, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase"
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock marker lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">Want to Know more about our technology stack? check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
};

export default ProductsPage;
