import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center justify-center  h-full mx-auto w-[500px] border-2 border-red-500 mt-10">
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 0.5 } }
            : { opacity: 0, x: -500 }
        }
      ></motion.div>
    </div>
  );
};

export default Lesson8;
