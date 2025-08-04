import HomeCarousel from "./components/Carousels/HomeCarousel";
import ContactUs from "./components/Section/ContactUs";
import Packages from "./components/Section/Packages";
// import ParalaxImage from "./components/Fragments/ParalaxImage";
import ParallaxStack from "./components/Section/ParallaxStack";
import WhySection from "./components/Section/WhySection";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Packages />
      <WhySection />
      <ParallaxStack />
      {/* <ParalaxImage imgSrc="/assets/images/hero-img.png" /> */}
      {/* <div className="h-[100vh]"></div> */}
      <ContactUs />
    </>
  );
}
