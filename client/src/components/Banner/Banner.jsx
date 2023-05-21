import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const bannerTemp = [
  {
    thumb: banner1,
    title: (
      <p className="text-[#323232] text-4xl font-[700]">
        Handmade <br /> Hand carved Coffee
      </p>
    ),
    desc: (
      <p className="opacity-80 lg:w-[38rem]">
        As rich and unique as the coffee beans it is intended for, this little
        scoop will make your morning ritual a special occasion every day.
      </p>
    ),
    id: 1,
  },
  {
    thumb: banner2,
    title: (
      <p className="text-[#323232] text-4xl font-[700]">
        Handmade <br /> Hand carved Coffee
      </p>
    ),
    desc: (
      <p className="opacity-80 lg:w-[38rem]">
        As rich and unique as the coffee beans it is intended for, this little
        scoop will make your morning ritual a special occasion every day.
      </p>
    ),
    id: 2,
  },
  {
    thumb: banner3,
    title: (
      <p className="text-[#323232] text-4xl font-[700]">
        Handmade <br /> Hand carved Coffee
      </p>
    ),
    desc: (
      <p className="opacity-80 lg:w-[38rem]">
        As rich and unique as the coffee beans it is intended for, this little
        scoop will make your morning ritual a special occasion every day.
      </p>
    ),
    id: 3,
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(1);
  const handleBannerNext = (id) => {
    setCurrentBanner(id + 1);
  };
  const handleBannerPrev = (id) => {
    setCurrentBanner(id - 1);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [currentBanner]);
  return (
    <div className="relative lg:h-[80vh]">
      {bannerTemp.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.thumb})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={
            currentBanner === item.id
              ? "translate-x-0 w-full h-full px-5 absolute top-0 transition duration-500 ease-in-out flex justify-center items-center"
              : "-translate-x-[150rem]"
          }
        >
          <button
            onClick={() => handleBannerPrev(item.id)}
            disabled={item.id === 1}
            className={item.id === 1 && "opacity-50"}
          >
            <BsArrowLeft className="lg:text-5xl text-3xl border text-secondary border-secondary rounded-full lg:p-2 p-1" />
          </button>
          <div data-aos="fade-up" className="container mx-auto flex flex-col ">
            {item.title}
            {item.desc}
          </div>
          <button
            onClick={() => handleBannerNext(item.id)}
            disabled={item.id === bannerTemp.length}
            className={item.id === bannerTemp.length && "opacity-50"}
          >
            <BsArrowRight className="lg:text-5xl text-3xl border text-secondary border-secondary rounded-full lg:p-2 p-1" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
