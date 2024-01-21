import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);

  //   const handleForward = () => {
  //     setToggle(!toggle);
  //     if (toggle) {
  //       controls.start({ x: 200 });
  //     } else {
  //       controls.start({ x: -200 });
  //     }
  //   };

  return (
    <div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: 0, transition: { delay: 1 } })}
      className="flex flex-col items-center justify-center  h-[600px] mx-auto w-[500px] border-2 border-red-500 mt-10"
    >
      {/* <button onClick={handleForward} className="bg-green-500 mb-10 px-3 py-2">
        forward
      </button> */}
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        animate={controls}
        custom={1}
      ></motion.div>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        animate={controls}
        custom={2}
      ></motion.div>
      <motion.div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        animate={controls}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
