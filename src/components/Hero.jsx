import { HERO_CONTENT } from "../constants/index";
import pfp from "../assets/mea.jpg";
import { motion } from "framer-motion";

const  handleDealy = (delay) =>({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay},
    },
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={handleDealy(0.6)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16"
            >
              Ayano✡️W
            </motion.h1>
            < motion.span  
             variants={handleDealy(1)}
             initial="hidden"
             animate="visible"
            
            className="bg-gradient-to-r from-violet-500 via-slate-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</ motion.span>
            <motion.p
            
            variants={handleDealy(0)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-white">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="w-40 h-30" src={pfp} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
