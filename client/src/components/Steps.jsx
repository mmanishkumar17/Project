import React from "react";
import Title from "./Title";
import { stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center my-32"
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
      <Title
        text1={"How it"}
        text2={"Works"}
        para={"Transform Words Into Stunning Images"}
      />
      <div className="space-y-4 max-w-3xl w-full text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 border hover:scale-[1.02] duration-300 transition-all cursor-pointer flex items-center gap-4 p-5 px-8 shadow-md rounded-lg border-gray-400"
          >
            <img src={item.icon} alt="icon" width={40} />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
