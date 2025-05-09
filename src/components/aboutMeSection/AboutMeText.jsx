
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Dhanavath Charasmi, a passionate full-stack and Android developer with a strong interest in coding,
        especially in Data Structures and Algorithms. I enjoy building efficient, user-friendly web and mobile 
        applications, working across both front-end and back-end technologies. Outside of development, 
        I'm a kabaddi player in my college girls' team—an experience that’s shaped my teamwork, focus,
         and determination both on the field and in my tech journey.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
