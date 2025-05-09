
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Related Course works",
    company: " ",
    date: " ",
    responsibilities: [
      "DSA in Java",
      "Oops",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Microprocessor and Computer Architecture",
    ],
  },
  {
    job: "Achievements",
    company: " ",
    date: " ",
    responsibilities: [
      "Selected in Phase 1 program Nurturing Talent in Semiconductor Fabrication Ecosystem by IITH.",
      "Qualified for Round 2 of the BNY Code Divas Challenge 2025, having successfully completed Round 1.",
      "Qualified the IIT Ramaiah Entrance Test(After 10th class).",
    ],
  },
  {
    job: "ExtraCurricular Activities",
    company: " ",
    date: " ",
    responsibilities: [
      "Member of the Think India Club, MNIT Jaipur.",
      "Participated in INTER NIT Sports Tournment for MNIT girls Kabaddi Team",
      "GoldMedal Winner in MST Sports kabaddi girls Team",
      "Member-Hostel Committee of Gargi Girls Hostel.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
