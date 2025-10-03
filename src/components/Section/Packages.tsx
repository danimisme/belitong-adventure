"use client";
import PackageCard from "../Cards/PackageCard";
import Toggle from "../Input/Toggle";
import { useEffect, useState } from "react";
import "./Packages.css";
import { packagesData, subCategories } from "@/data/adventure-packages/packages";
import { PackageType } from "@/models/Packages";

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState<
    "jage-bumi" | "jage-laut"
  >("jage-bumi");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    "adventure"
  );
  const [filteredPackages, setFilteredPackages] = useState<PackageType[]>();

  useEffect(() => {
    let filtered = packagesData.filter((pkg) => pkg.category === activeCategory);
    if (activeSubCategory) {
      filtered = filtered.filter(
        (pkg) => pkg.subCategory === activeSubCategory
      );
    }
    setFilteredPackages(filtered);
  }, [activeCategory, activeSubCategory]);

  // Initialize AOS on client once
  useEffect(() => {
    let mounted = true;
    import("@reimujs/aos").then(({ default: AOS }) => {
      if (!mounted) return;
      AOS.init(
        { duration: 800, // values from 0 to 3000, with step 50ms
          easing: "ease-in-out",
          once: true, // whether animation should happen only once - while scrolling down
        }
      );
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Refresh AOS whenever the list of cards changes
  useEffect(() => {
    if (!filteredPackages) return;
    import("@reimujs/aos").then(({ default: AOS }) => {
      // small timeout to ensure DOM is painted before refresh
      requestAnimationFrame(() => {
        if (typeof AOS.refreshHard === "function") {
          AOS.refreshHard();
        } else if (typeof AOS.refresh === "function") {
          AOS.refresh();
        }
      });
    });
  }, [filteredPackages]);

  
  return (
    <section className="packages-section md:min-h-[100vh]" id="jage">
      <div className="container flex flex-col items-center justify-center md:text-center mt-24"
        data-aos="fade-up">
        <h2 className="text-2xl font-extrabold lg:mb-6 mb-4">
          Featured Advanture Packages
        </h2>
        <p className="max-w-xl text-gray-500 md:font-bold">
          Explore our most popular boat voyages around Belitong Island. Each
          package offers a unique experience of the island&#39;s natural beauty.
        </p>
      </div>
      <div className="container mx-auto flex gap-4 justify-center mt-4 md:py-4 py-2 md:mt-8"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className={`jage font-semibold ${
            activeCategory === "jage-laut"
              ? "text-gray-500"
              : "active  text-primary"
          }`}
          onClick={() => setActiveCategory("jage-bumi")}
        >
          Jage Bumi
        </div>
        <Toggle
          label="Jage Laut"
          checked={activeCategory === "jage-laut"}
          value={activeCategory === "jage-laut" ? "jage-laut" : "jage-bumi"}
          onChange={(e) => setActiveCategory(e ? "jage-laut" : "jage-bumi")}
        />
        <div
          className={`jage font-semibold ${
            activeCategory === "jage-laut"
              ? "active  text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveCategory("jage-laut")}
        >
          Jage Laut
        </div>
      </div>

      <div className="max-w-2xl mx-4  md:mx-auto grid grid-cols-4 mt-4 rounded-s-full rounded-r-full overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {subCategories.map((subCat) => (
          <div
            key={subCat.value}
            className={`py-2 text-center font-bold text-xs md:text-base lg:text-lg ${activeSubCategory === subCat.value ? "bg-primary text-white" : "text-primary bg-secondary hover:bg-primary/50 cursor-pointer transition-all duration-300"}`}
            onClick={() =>
              setActiveSubCategory(
                activeSubCategory === subCat.value ? null : subCat.value
              )
            }
          >
            {subCat.label}
          </div>
        ))}
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-12 mt-8 md:mt-12 pb-16">
        {filteredPackages &&
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="flex justify-center w-full md:w-[45%] lg:w-[30%]"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <PackageCard data={pkg} linkTo={`/packages/${pkg.slug}`} />
            </div>
          ))}
      </div>

    </section>
  );
}

