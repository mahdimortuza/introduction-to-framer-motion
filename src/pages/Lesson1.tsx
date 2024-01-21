import { motion } from "framer-motion";
const Lesson1 = () => {
  // const parent = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-[1080px]">
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
      >
        {/* <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => {
          console.log("hover");
        }}
        onHoverEnd={() => {
          console.log("hover");
        }}
      > */}
        {/* <motion.div
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
        ></motion.div> */}
      </motion.div>
    </div>
  );
};

export default Lesson1;
