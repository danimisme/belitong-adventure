import HomeCarousel from "../components/Carousels/HomeCarousel";
import ContactUs from "../components/Section/ContactUs";
import DiscoverSection from "../components/Section/DiscoverSection";
import Packages from "../components/Section/Packages";
import WhySection from "../components/Section/WhySection";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Packages />
      <WhySection />
      <DiscoverSection />
      <ContactUs />
    </>
  );
}
