import React from "react";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image Section*/}
              <div>
                <img
                  src="{Food1}"
                  alt=""
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0, 0, 0, 0.1)]"
                />
              </div>
              <div>
                {/* Text-content Section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    Lorem, ipsum dolor.
                  </h1>
                  <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum illo excepturi reprehenderit quaerat officiis similique exercitationem nihil porro fugit.
                  <br />
                  <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint facilis iure optio vero veniam dignissimos perferendis officia minus tempore similique?  
                  </p>
                  <div>
                    <div>
                        <GrSecure className="text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
