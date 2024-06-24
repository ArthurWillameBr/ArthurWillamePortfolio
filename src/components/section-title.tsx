"use client"

import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
}

const SectionTitle = ({title}: SectionTitleProps) => {
    return ( 
        <motion.h1
        id="projects" 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold lg:text-4xl"
      >
        {title}
      </motion.h1>
     );
}
 
export default SectionTitle;