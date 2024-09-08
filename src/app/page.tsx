import About from "./components/about";
import GetQuote from "./components/get-quote";
import { HomePage } from "./components/home";
import Navbar from "./components/navbar";
import SignatureWork from "./components/signature-work";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <SignatureWork />
      <Testimonials />
      <GetQuote />
    </>
  );
}
