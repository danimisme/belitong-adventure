import ParalaxImage from "./components/Fragments/ParalaxImage";
import "./globals.css";
export default function Home() {
  return (
    <>
      <ParalaxImage imgSrc="/assets/images/hero-img.png" imgAlt="Belitong Island">
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-evenly items-start h-full py-8 md:py-16 lg:py-20">
            <h1 className="font-italiana text-[58px] text-white relative leading-[1.2]">
              Voyage Through the <br className="hidden md:block"/> Beauty of Belitung
            </h1>
            <button className="font-italiana font-semibold text-xl border border-white text-white py-4 px-7 rounded-full bg-white/10  hover:bg-white hover:text-black transition-colors duration-300">
              Set Your Voyage<br /> in  Motion
            </button>
            <p className="text-white text-lg">
              Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.
            </p>
          </div>
        </div>
      </ParalaxImage>
    </>
  );
}
