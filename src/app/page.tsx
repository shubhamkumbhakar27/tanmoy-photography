import About from "./components/about";
import Blogs from "./components/blogs";
import FilmCategories from "./components/films";
import Footer from "./components/footer";
import GetQuote from "./components/get-quote";
import { HomePage } from "./components/home";
import Navbar from "./components/navbar";
import PhotographyPortfolio from "./components/portfolio";
import SignatureWork from "./components/signature-work";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <SignatureWork />
      {/* <PhotographyPortfolio />
      <FilmCategories /> */}

      <Testimonials />
      {/* <Blogs /> */}
      <GetQuote />

      <Footer />
    </>
  );
}
