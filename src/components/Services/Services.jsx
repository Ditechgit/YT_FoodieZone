import React from "react";
import Img2 from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Byriani",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, dicta facere laboriosam aut tempore in laudantium ipsa dignissimos doloremque voluptatem!",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, dicta facere laboriosam aut tempore in laudantium ipsa dignissimos doloremque voluptatem!",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, dicta facere laboriosam aut tempore in laudantium ipsa dignissimos doloremque voluptatem!",
  }
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="px-12">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel
              beatae cumque autem impedit maxime, et optio atque non at!
            </p>
          </div>
          {/* Card Section */}
          <div>
            <div>
              {ServicesData.map(({ id, img, name, description }) => {
                return <div key={id}>
                  <div>
                    <img src={img} alt="" />
                  </div>
                </div>
              })};
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
