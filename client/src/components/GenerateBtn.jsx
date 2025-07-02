import React, { useContext } from "react";
import Title from "./Title";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(Appcontext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center pb-16"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Title text1={"See the Magic. "} text2={"Try now"} />
      <button
        onClick={onClickHandler}
        className="sm:text-lg bg-black text-white px-12 mt-5 rounded-full flex py-2.5 items-center gap-2 w-auto cursor-pointer duration-300 hover:scale-105 transition-all"
      >
        Generate Images
        <img src={assets.star_group} alt="star_group" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
