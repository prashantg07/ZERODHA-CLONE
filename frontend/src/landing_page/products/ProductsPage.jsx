import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RigthSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productLink1="Try Demo "
        productLink2="Learn More "
        googlePlay=""
        appStore=""
      />
      <RigthSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account.Gain insights into your trades and investments with in-depth reports and visualisations"
        productLink="Learn more"
        imageURL="media\images\console.png"
      />
      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        productLink1="Coin "
        productLink2=""
        googlePlay=""
        appStore=""
      />
      <RigthSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productLink="Kite Connect"
        imageURL="media/images/kiteconnect.png"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        productLink1=""
        productLink2=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fw-bold fs-5 p-5">Want to know more about our technology stack? Check out the <a className="text-decoration-none" href="">Zerodha.tech </a>blog.</p>
      <Universe />
    </div>
  );
}

export default ProductsPage;