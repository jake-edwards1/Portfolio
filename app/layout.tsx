import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jake Edwards',
  description: 'Jake Edwards - Software Engineer with a B.S. in Software Engineering and a minor in CIT. Experienced in React, Next.js, Java, and Spring Boot. Download my resume and connect with me on LinkedIn and GitHub.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-16rem] 2xl:left-[-5rem]'></div>
        <Header/>
        {children}
      </body>
    </html>
  )
}
