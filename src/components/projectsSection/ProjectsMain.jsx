
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Zerodha Clone",
    year: "Dec2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/Charasmi/Zerodha-Clone",
  },
  {
    name: "Portfolio",
    year: "Feb2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/Charasmi/Portfolio",
  },
  {
    name: "Feedback Collector ",
    year: "April2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/Charasmi/Feedback-Collector",
  },
  {
    name: "RealTime Chat Application",
    year: "April2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/Charasmi/RealTimeChatApp",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
