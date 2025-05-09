
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        INDIAN AIR FORCE
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="May 2024" text="" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="July 2024" text="" />
      </div>
      <p className="text-center">
      Gained hands-on experience working on real-time Android development projects during the internship.
      </p>
      <ExperienceInfo number="Android Developer" text=" " />
    </div>
  );
};

export default ExperienceTopLeft;
