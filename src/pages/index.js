import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen bg-blue-900'>
      <h1 className='bg-blue-900 text-center pt-12 text-white font-bold text-5xl font-serif'>
        Welcome To Raccoonify
      </h1>
      <div className='mt-36 grid grid-cols-3 bg-blue-900'>
        <div className='justify-center align-center'>
          <Image className='mx-auto justify-center align-center' src="/raccoontwo.png" height={250} width={250}/>
        </div>
        <div className=' bg-blue-900'>
          <Carousel/>
        <div className='bg-blue-900 text-center justify-center'>
        <Button text="Login" link="login"/>
        </div>
        </div>
        <div className='items-center justify-center align-center'>
          <Image className='mx-auto justify-center align-center' src="/raccoonone.png" height={250} width={250}/>
        </div>
      </div>
    </div>
  )
}
