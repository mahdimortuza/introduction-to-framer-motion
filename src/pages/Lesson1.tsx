import { motion } from "framer-motion";
const Lesson1 = () => {
  const initial = { rotate: 0 };
  const animate = { rotate: 360 };

  return (
    <div>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg"
        initial={initial}
        animate={animate}
        transition={{ type: "spring", duration: 2 }}
      >
        hi
      </motion.div>
    </div>
  );
};

export default Lesson1;
