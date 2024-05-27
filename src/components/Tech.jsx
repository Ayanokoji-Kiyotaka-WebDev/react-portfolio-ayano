import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconMoving = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

function Tech() {
  return (
    <div className="border-b border-violet-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          variants={iconMoving(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-violet-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconMoving(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-violet-800 p-4"
        >
          <FaNodeJs className="text-7xl  text-green-300" />
        </motion.div>
        <motion.div
          variants={iconMoving(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-violet-800 p-4"
        >
          <SiMongodb className="text-7xl  text-green-800" />
        </motion.div>
        <motion.div
          variants={iconMoving(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-violet-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl  text-sky-800" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
