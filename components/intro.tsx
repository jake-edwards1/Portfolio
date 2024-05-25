'use client'

import Image from 'next/image'
import React from 'react'
import portrait from '@/public/profile sq.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Image 
                        src={portrait}
                        alt='Jake Portrait'
                        width={192}
                        height={192}
                        quality={95}
                        priority
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>

                <motion.span 
                    className='absolute bottom-0 right-0 text-4xl'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        
        <motion.p 
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className='font-bold'>Hi, I'm Jake.{' '}</span>
            I've spent the last <span className='font-bold'>two years</span> working in {' '}
            <span className='italic'>full-stack development</span>, specializing {' '}
            in <span className='font-bold'>React, Next.js, Java, and Spring Boot.</span>
        </motion.p>

        <motion.div
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <Link 
                href={"#contact"}
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            >
                Contact me here <BsArrowRight className='opacity-60 group-hover:translate-x-1 transition'/>
            </Link>

            <a 
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-black/10'
                href='/jake_edwards_resume.pdf' download
            >
                Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/>
            </a>

            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
                href="https://linkedin.com/in/jake-edwards647"
                target="_blank"
            >
                <BsLinkedin />
            </a>

            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
                href="https://github.com/jake-edwards1"
                target="_blank"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
