import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import JoinUs from "../components/landing/Join";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Pricing/>
      <Testimonials/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}
