import HomeCarousel from "./components/Carousels/HomeCarousel";
import ParalaxImage from "./components/Fragments/ParalaxImage";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <ParalaxImage imgSrc="/assets/images/hero-img.png" />
      
    </>
  );
}
