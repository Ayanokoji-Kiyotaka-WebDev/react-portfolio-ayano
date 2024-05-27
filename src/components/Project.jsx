import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

function Project() {
  return (
    <div className='bordr-b border-violet-900 pb-4'>
        < motion.h2
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y: -100}}
         transition={{duration:0.5}}
        
        className='my-20 text-center text-4xl'>Project</motion.h2>
        <div className="">
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-9 flex flex-wrap lg:justify-center'>
                    < motion.div 
                    
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y: -100}}
                    transition={{duration:0.5}}
                   
                    className="w-full lg:w-1/4">

                    
                    
                    <img src={project.image}  width={150} height={150}  className='mb-6 rounded' alt={project.title} />

                    </ motion.div>
                    <motion.div 
                     whileInView={{opacity:1, y:0}}
                     initial={{opacity:0, y: -100}}
                     transition={{duration:0.5}}
                    
                    className="w-full max-w-xl lg:w/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-violet-100'>{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span className='mr-2 rounded bg-violet-900 px-2 py-1 text-sm font-medium text-white' key={index}>{tech}
                            

                            </span>
                        ))}
                    </motion.div>
                    </div>


            ))}

        </div>

    </div>
  )
}

export default Project