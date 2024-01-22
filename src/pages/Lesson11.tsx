import { motion, useMotionValue, useTransform } from "framer-motion";
const Lesson11 = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 360]);
  return (
    <div className="flex flex-col items-center justify-center  h-[500px] mx-auto w-[500px] border-2 border-red-500 mt-10">
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        style={{ x, rotate, scale }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default Lesson11;
