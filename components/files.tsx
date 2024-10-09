'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'

export default function Files() {
  return (
    <section className='mb-28 max-w-[50rem] sm:mb-0'>
        <motion.div
            className='text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <a 
                className='group bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition border border-black/10'
                href='/jake_edwards_resume.jpg' download
            >
                Support <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/>
            </a>
            <a 
                className='group bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition border border-black/10'
                href='/je_resume.pdf' download
            >
                Software Engineering <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/>
            </a>
        </motion.div>
    </section>
  )
}
