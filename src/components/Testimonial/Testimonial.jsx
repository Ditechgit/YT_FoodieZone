import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse quod amet corrupti aperiam! Dolorum, ipsam molestiae? Incidunt, modi praesentium.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Jane Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse quod amet corrupti aperiam! Dolorum, ipsam molestiae? Incidunt, modi praesentium.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse quod amet corrupti aperiam! Dolorum, ipsam molestiae? Incidunt, modi praesentium.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel
              beatae cumque autem impedit maxime, et optio atque non at!
            </p>
          </div>
          {/* testimonial section */}
          <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-yellow-100 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <p className="text-gray-500 text-sm">{text}</p>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-400 text-8xl font-serif absolute top-0 right-0">,,</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
