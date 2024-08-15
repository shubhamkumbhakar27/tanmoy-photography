import About from "./components/about";
import Banner from "./components/banner";
import BannerCarousel from "./components/banner-carousel";
import Footer from "./components/footer";
import { HomePage } from "./components/home";
import Navbar from "./components/navbar";
import PhotographyPortfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />

      {/* <Banner /> */}
      {/* <BannerCarousel /> */}
      {/* <div className="h-24 bg-orange-50" /> */}
      <About />
      <PhotographyPortfolio />

      <div className="h-24 bg-orange-50" />
      <Testimonials />
      <Footer />
    </>
  );
}
