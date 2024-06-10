import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/hero/Hero";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Services/>
      <Experience/>
      <AboutUs/>
      <ContactUs/>
    </main>
  );
}
