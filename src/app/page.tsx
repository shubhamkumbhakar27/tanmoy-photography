import About from "./components/about";
import Banner from "./components/banner";
import BannerCarousel from "./components/banner-carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <BannerCarousel /> */}
      <div className="h-24 bg-orange-50" />
      <About />
      <div className="h-24 bg-orange-50" />
      <Testimonials />
      <Footer />
    </>
  );
}
