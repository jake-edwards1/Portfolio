"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
    return (
        <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I am a dedicated software engineer with a B.S. in Software Engineering 
                and a minor in Computer Information Technology from BYU-Idaho. With 
                experience in both front-end and back-end development, I excel in ReactJS, 
                NextJS, and Spring Boot. I am passionate about creating intuitive 
                user experiences and leveraging technology to solve complex problems. Known 
                for my patience, persistence, and effective communication, I am committed 
                to driving project success in collaborative environments. I am currently 
                looking for a <span className="font-medium">full-time position</span> as 
                a software developer.
            </p>

            <p>
                When I'm not coding, I enjoy playing video games, watching TV, and 
                playing guitar.
            </p>
        </motion.section>
    )
}
