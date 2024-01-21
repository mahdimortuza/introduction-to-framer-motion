import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Lesson9 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  h-[500px] mx-auto w-[500px] border-2 border-red-500 mt-10">
      <div
        className=" size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-4 p-5 justify-center items-center"
        ref={scope}
      ></div>
    </div>
  );
};

export default Lesson9;
