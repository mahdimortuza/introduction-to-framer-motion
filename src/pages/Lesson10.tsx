import { motion, useDragControls } from "framer-motion";

const Lesson10 = () => {
  const controls = useDragControls();
  return (
    <div className="flex flex-col items-center justify-center  h-[500px] mx-auto w-[500px] border-2 border-red-500 mt-10">
      <div
        onPointerDown={(e) => controls.start(e)}
        className=" w-64 h-10 bg-green-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
      ></div>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        drag="x"
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson10;
