import Link from 'next/link'
import React from 'react'

const Button = ({text, link}) => {

  return (
    <Link href={link}>
        <button  class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">{text}</span>
        </button>
    </Link>
  )
}

export default Button