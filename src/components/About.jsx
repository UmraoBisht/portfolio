import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { sectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[230px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0, 5 * index, 0.75)}
        className="border-purple-700 border-2 w-full green-pink gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 1,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure ab
        laborum ipsum nisi at quis dignissimos? Officia rem est, facere dolorum
        temporibus, repellendus architecto nam dolores, laboriosam quis soluta
        culpa optio ratione possimus non voluptas sed autem quos nesciunt
        mollitia cum qui deserunt. Suscipit fuga ex animi iusto voluptates.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ex
        vero soluta repellendus voluptatum modi ab, harum accusantium velit
        ipsa, saepe voluptate. Molestiae voluptate minus nostrum itaque sapiente
        exercitationem impedit.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About,'about');
