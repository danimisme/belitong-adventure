"use client";

import HomeCarousel from "./components/Carousels/HomeCarousel";
import ParalaxImage from "./components/Fragments/ParalaxImage";

export default function Home() {
  return (
    <>
      {/* Fullpage hanya untuk HomeCarousel */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="h-screen snap-start bg-red-300 flex items-center justify-center">
          <HomeCarousel />
        </section>
        <section className="h-screen snap-start bg-yellow-300 flex items-center justify-center">
          <h1 className="text-4xl">Section 2</h1>
        </section>
        <section className="h-screen snap-start bg-green-300 flex items-center justify-center">
          <h1 className="text-4xl">Section 3</h1>
        </section>
        <section className="h-screen snap-start bg-black flex items-center justify-center">
          <h1 className="text-4xl">Section 4</h1>
        </section>
        <section className="h-screen snap-start bg-green-300 flex items-center justify-center">
          <ParalaxImage imgSrc="/assets/images/hero-img.png" />
        </section>
        <section className="h-screen snap-start bg-blue-300 flex items-center justify-center">
          <h1 className="text-4xl">Section 5</h1>
        </section>
      </div>

    </>
  );
}
