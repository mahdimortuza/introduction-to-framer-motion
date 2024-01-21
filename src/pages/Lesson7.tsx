import { motion, useCycle } from "framer-motion";
const Lesson7 = () => {
  const boxAnimation = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.5 },
    { x: -100, y: 100, opacity: 0.25 },
    { x: -100, y: -100, opacity: 0 },
  ];
  const [animate, cycle] = useCycle(...boxAnimation);
  return (
    <div className="flex flex-col items-center justify-center  h-[600px] mx-auto w-[500px] border-2 border-red-500 mt-10">
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        animate={animate}
        onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
