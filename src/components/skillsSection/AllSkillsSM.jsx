import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
          skill: "HTML",
          icon: FaHtml5,
        },
        {
          skill: "CSS",
          icon: FaCss3Alt,
        },
        {
          skill: "JavaScript",
          icon: IoLogoJavascript,
        },
        {
          skill: "ReactJS",
          icon: FaReact,
        },
        {
          skill: "NodeJS",
          icon: FaNodeJs,
        },
        {
          skill: "ExpressJS",
          icon: SiExpress,
        },
        {
          skill: "MongoDB",
          icon: SiMongodb,
        },
        {
          skill: "TailwindCSS",
          icon: SiTailwindcss,
        },
        {
          skill: "Bootstrap",
          icon: FaBootstrap,
        },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
