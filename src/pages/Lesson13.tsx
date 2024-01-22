import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson13 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex flex-col items-center justify-center  h-[500px] mx-auto w-[500px] border-2 border-red-500 mt-10">
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          Click
        </motion.button>
        {visible && (
          <motion.div
            className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
