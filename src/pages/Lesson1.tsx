import { motion } from "framer-motion";
const Lesson1 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          type: "easeInOut",
          duration: 1.5,
          delayChildren: 1,
          staggerChildren: 1,
        }}
      >
        <motion.div
          variants={child}
          transition={{ type: "easeInOut", duration: 1.5 }}
          className="size-20 bg-cyan-400 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          transition={{ type: "easeInOut", duration: 1.5 }}
          className="size-20 bg-cyan-400 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          transition={{ type: "easeInOut", duration: 1.5 }}
          className="size-20 bg-cyan-400 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          transition={{ type: "easeInOut", duration: 1.5 }}
          className="size-20 bg-cyan-400 rounded-sm"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson1;
