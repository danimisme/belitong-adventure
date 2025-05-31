"use client";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import HeroImage from "../Fragments/HeroImage";
import ActionButton from "../Button/ActionButon";

interface ImgProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  action: {
    text: string;
    linkTo: string;
  };
}

export default function HomeCarousel() {
  const data : ImgProps[] = [
    {
      imgSrc: "/assets/images/hero-img.png",
      imgAlt: "Belitong Island",
      title: "Voyage Through the Beauty of Belitung",
      desc: "Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.",
      action : {
        text: "Set Your Voyage in Motion",
        linkTo: "#"
      },
    },
    {
      imgSrc: "/assets/images/hero-img2.png",
      imgAlt: "Belitong Island",
      title: "Voyage Through the Beauty of Belitung",
      desc: "Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.",
      action : {
        text: "Set Your Voyage in Motion",
        linkTo: "#"
      },
    },
    {
      imgSrc: "/assets/images/hero-img3.png",
      imgAlt: "Belitong Island",
      title: "Voyage Through the Beauty of Belitung",
      desc: "Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.",
      action : {
        text: "Set Your Voyage in Motion",
        linkTo: "#"
      },
    },
    {
      imgSrc: "/assets/images/hero-img4.png",
      imgAlt: "Belitong Island",
      title: "Voyage Through the Beauty of Belitung",
      desc: "Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.",
      action : {
        text: "Set Your Voyage in Motion",
        linkTo: "#"
      },
    }
  ]

  const components = data.map((item, index) => {
    switch (index) {
      case 0:
        return <HeroImage1 key={index} {...item} />;
      case 1:
        return <HeroImage2 key={index} {...item} />;
      case 2:
        return <HeroImage3 key={index} {...item} />;
      case 3:
        return <HeroImage4 key={index} {...item} />;
      default:
        return null;
    }
  });
  return (
          <AliceCarousel
            autoPlay
            animationType="fadeout"
            autoPlayInterval={5000}
            infinite
            disableButtonsControls
            disableDotsControls
            mouseTracking
            items={components}
            responsive={{
              0: { items: 1 },
              1024: { items: 1 },
              1440: { items: 1 },
              1920: { items: 1 },
            }}
            />
  )
}
 const HeroImage1 = ({title, desc, action, imgSrc, imgAlt} : ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-evenly items-start h-full py-8 md:py-16 lg:py-20">
          <h1 className="font-italiana text-[58px] text-white relative leading-[1.2]">
            {title}
          </h1>
          <ActionButton text={action.text} linkTo={action.linkTo} />
          <p className="text-white text-lg">
            {desc}
          </p>
        </div>
      </div>
    </HeroImage>
  );
}

const HeroImage2 = ({title, desc, action, imgSrc, imgAlt} : ImgProps) => {
  return (
     <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
          <div className="grid grid-cols-2 h-full">
            <div className="col-start-2 flex flex-col justify-end items-center gap-12 h-full py-8 md:py-16 lg:py-20">
              <ActionButton text={action.text} linkTo={action.linkTo} />
              <h1 className="font-italiana text-center text-[58px] text-white relative leading-[1.2]">
                {title}
              </h1>
              <p className="text-white text-lg text-center">
                {desc}
              </p>
            </div>
          </div>
        </HeroImage>
  )
}

const HeroImage3 = ({title, desc, action, imgSrc, imgAlt}: ImgProps) => {
   return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-evenly items-start h-full py-8 md:py-16 lg:py-20">
            <h1 className="font-italiana text-[58px] text-white relative leading-[1.2]">
              {title}
            </h1>
             <p className="text-white text-lg">
              {desc}
            </p>
            <ActionButton text={action.text} linkTo={action.linkTo} />
          </div>
        </div>
      </HeroImage>
   )
}

const HeroImage4 = ({title, desc, action, imgSrc, imgAlt}: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
          <div className="grid grid-cols-1 h-full">
            <div className="flex flex-col justify-between items-center h-full py-8 md:py-16 lg:py-20 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-8">
                  <h1 className="font-italiana text-[58px] text-white relative leading-[1.2] text-center">
                    {title}
                </h1>
                <p className="text-white text-lg text-center">
                  {desc}
                </p>
              </div>
              <ActionButton text={action.text} linkTo={action.linkTo} />
            </div>
          </div>
        </HeroImage>
      );
}