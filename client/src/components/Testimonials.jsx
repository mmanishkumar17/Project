import React from "react";
import Title from "./Title";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center my-20 py-12"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Title
        text1={"Customer "}
        text2={"Testimonials"}
        para={"What Our Users are Saying"}
      />
      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center ">
              <img
                src={testimonials.image}
                alt="image"
                className="rounded-full w-14"
              />
              <h2 className="text-xl font-semibold mt-3">
                {testimonials.name}
              </h2>
              <p className="text-gray-500 mb-4">{testimonials.role}</p>
              <div className="flex mb-4">
                {Array(testimonials.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {testimonials.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
