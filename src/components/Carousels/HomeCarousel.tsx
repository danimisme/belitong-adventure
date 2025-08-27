"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
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
  const data: ImgProps[] = [
    {
      imgSrc: "/assets/images/hero-img.png",
      imgAlt: "Jage Laut: The Ocean's Embrace",
      title: "Jage Laut: The Ocean's Embrace",
      desc: "Let the gentle waves and the endless blue of the sea be your sanctuary. With 'Jage Laut', we guide you on a secluded sea journey to find your own paradise. Relax on sun-drenched beaches, swim in tranquil coves, and let the rhythm of the ocean wash your worries away. Your perfect day on the water awaits.",
      action: {
        text: "Plan Your Escape",
        linkTo: "#",
      },
    },
    {
      imgSrc: "/assets/images/hero-img2.png",
      imgAlt: "Jage Bumi: Journey Through Belitung's earthly wonders",
      title: "Jage Bumi: Journey Through Belitung's earthly wonders",
      desc: "Venture beyond the coastline and uncover the hidden gems of Belitung's heartland. Our 'Jage Bumi' journey invites you to traverse unique landscapes, from the otherworldly Kaolin Lake to the lush forests that hold ancient secrets. This is your chance to connect with the island's soul and witness the natural artistry etched into its land.",
      action: {
        text: "Chart Your Course",
        linkTo: "#",
      },
    },
    {
      imgSrc: "/assets/images/hero-img3.png",
      imgAlt: "Belitong Island",
      title: "Jage Laut: Your Maritime Adventure in Belitung",
      desc: "Imagine the gentle waves and the endless blue of the sea as your sanctuary. With our 'Jage Laut' experience, embark on your own personal vessel to find your own paradise. Relax on sun-drenched beaches, swim in tranquil coves, and let the rhythm of the ocean wash your worries away. Your perfect day on the water awaits.",
      action: {
        text: "Begin Your Journey",
        linkTo: "#",
      },
    },
    {
      imgSrc: "/assets/images/hero-img4.png",
      imgAlt: "Where Granite Challenges Forge Stronger Teams.",
      title: "Where Granite Challenges Forge Stronger Teams.",
      desc: "Go beyond the ordinary. Our island adventures use the natural landscape of Belitung to build resilience, trust, and unforgettable team spirit.",
      action: {
        text: "Accept the Challenge",
        linkTo: "#",
      },
    },
    {
      imgSrc: "/assets/images/hero-img5.jpg",
      imgAlt: "Voyage Through the Beauty of Belitung",
      title: "Voyage Through the Beauty of Belitung",
      desc: "Discover untouched beaches, turquoise waters, and quiet island escapes. Book your private boat and make your journey unforgettable.",
      action: {
        text: "Set Your Voyage in Motion",
        linkTo: "#",
      },
    },
     {
      imgSrc: "/assets/images/hero-img6.png",
      imgAlt: "Discover the Secret World of Belitung",
      title: "Discover the Secret World of Belitung",
      desc: "As darkness falls, the forest awakens. Learn about its most mysterious resident on a respectful and educational Tarsier encounter.",
      action: {
        text: "Begin the Discovery",
        linkTo: "#",
      },
    },
  ];

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
      case 4:
        return <HeroImage5 key={index} {...item} />;
      case 5:
        return <HeroImage6 key={index} {...item} />;
      default:
        return null;
    }
  });
  return (
    <section id="home">
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
    </section>
  );
}
const HeroImage1 = ({ title, desc, action, imgSrc, imgAlt }: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
      <div className="grid grid-cols-1 h-full">
        <div className="flex flex-col justify-evenly items-start h-full py-8 md:py-16 lg:py-20 md-w-[70%]">
          <h1 className="font-italiana text-[58px] text-white relative leading-[1.2] md:w-[50%]"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
            {title}
          </h1>
          <ActionButton text={action.text} linkTo={action.linkTo} />
          <div className="md:flex md:justify-start md:w-[70%]">
            <p className="mt-10 text-white text-lg"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>{desc}</p>
          </div>
        </div>
      </div>
    </HeroImage>
  );
};

const HeroImage2 = ({ title, desc, action, imgSrc, imgAlt }: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} overlayColor="bg-black/25">
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-0 h-full">
        <div className="col-span-2 flex flex-col justify-end gap-12 h-full py-8 md:py-16 lg:py-20">
          <div className="md:flex md:w-[60%] md:justify-start">
            <h1 className="font-italiana text-center text-[58px] text-white relative leading-[1.2]"
             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
              {title}
            </h1>
          </div>
          <div className="md:flex w-full md:justify-end">
            <div className="md:w-[70%] flex w-full justify-center">
              <ActionButton text={action.text} linkTo={action.linkTo} />
            </div>
          </div>
          <div className="md:flex w-full md:justify-end">
            <p className="text-white text-lg text-center md:w-[70%]"
             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>{desc}</p>
          </div>
        </div>
      </div>
    </HeroImage>
  );
};

const HeroImage3 = ({ title, desc, action, imgSrc, imgAlt }: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} overlayColor="bg-black/20">
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-start h-full md:py-16 py-20">
          <h1 className="font-italiana text-[58px] text-white relative leading-[1.2] max-w-5xl"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
            {title}
          </h1>
          <p className="text-white text-lg max-w-6xl mt-20 md:mt-8"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>{desc}</p>
          <div className="md:w-xl flex justify-center mt-32">
            <ActionButton text={action.text} linkTo={action.linkTo} />
          </div>
        </div>
      </div>
    </HeroImage>
  );
};

const HeroImage4 = ({ title, desc, action, imgSrc, imgAlt }: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} overlayColor="bg-black/35">
      <div className="grid grid-cols-1 py-16 md:py-0 h-full">
        <div className="flex flex-col justify-between w-full h-full py-8 md:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-24 max-w-4xl">
              <h1
              className="font-italiana text-[58px] text-white text-shadow-black relative leading-[1.2] text-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              {title}
            </h1>
            <ActionButton text={action?.text} linkTo={action?.linkTo} />
            </div>

            <div className="w-full flex justify-end mt-8">
              <p
              className="text-white text-lg text-center max-w-2xl"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              {desc}
            </p>
            </div>
        </div>
      </div>
    </HeroImage>
  );
};

const HeroImage5 = ({title, desc, action, imgSrc, imgAlt} : ImgProps) => {
  return (
     <HeroImage imgSrc={imgSrc} imgAlt={imgAlt}>
          <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-0 h-full">
            <div className="col-start-2 flex flex-col justify-end items-center gap-12 h-full py-8 md:py-16 lg:py-20">
              <ActionButton text={action.text} linkTo={action.linkTo} />
              <h1 className="font-italiana text-center text-[58px] text-white relative leading-[1.2]"
               style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                {title}
              </h1>
              <p className="text-white text-lg text-center"
               style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                {desc}
              </p>
            </div>
          </div>
        </HeroImage>
  )
}

const HeroImage6 = ({ title, desc, action, imgSrc, imgAlt }: ImgProps) => {
  return (
    <HeroImage imgSrc={imgSrc} imgAlt={imgAlt} overlayColor="bg-black/30">
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-start justify-between h-full pt-8 md:pt-16 lg:pt-20">
          <h1 className="font-italiana text-[58px] text-white relative leading-[1.2] max-w-4xl md:text-center"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
            {title}
          </h1>
            <div className="flex flex-col items-center w-full gap-24 max-w-3xl mt-24">
              <ActionButton text={action.text} linkTo={action.linkTo} />
            </div>

          <div className="flex justify-end w-full mt-32 mb-24">
            <p className="text-white text-lg max-w-3xl mt-20 md:mt-0"
               style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >{desc}</p>

          </div>
        </div>
      </div>
    </HeroImage>
  );
};
