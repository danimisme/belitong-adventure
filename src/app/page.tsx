import HomeCarousel from "./components/Carousels/HomeCarousel";
import ContactUs from "./components/Section/ContactUs";
// import ParalaxImage from "./components/Fragments/ParalaxImage";
import ParallaxStack from "./components/Section/ParallaxStack";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <ParallaxStack />
      {/* <ParalaxImage imgSrc="/assets/images/hero-img.png" /> */}
      {/* <div className="h-[100vh]"></div> */}
      <ContactUs />
    </>
  );
}
