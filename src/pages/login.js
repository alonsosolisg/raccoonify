import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const login = () => {

  return (
//     <!-- component -->
// <!-- Container -->
<div>
<div className="bg-blue-900 flex flex-wrap min-h-screen w-full content-center justify-center py-10">
  {/* <!-- Login component --> */}
  <div className="flex shadow-md">
    {/* <!-- Login form --> */}
    <div className="pt-10  px-10 flex flex-wrap content-center justify-center rounded-md bg-white " >
      
      <div className="w-72">
        {/* <!-- Heading --> */}
        <div className='text-center mb-8'>
            <a className='font-bold font-serif text-2xl'>Raccoonify</a>
        </div>
        <h1 className="text-xl font-semibold">Welcome back</h1>
        <small className="text-gray-400">Welcome back! Please enter your details</small>

        {/* <!-- Form --> */}
        <form className="mt-4">
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Email</label>
            <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Password</label>
            <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div className="mb-3 flex flex-wrap content-center">
            <input id="remember" type="checkbox" className="mr-1 checked:bg-blue-700" /> <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
            <a href="#" className="text-xs font-semibold text-blue-700">Forgot password?</a>
          </div>

          <div className="mb-3">
            <Link href='/inside'>
            <button className="mb-1.5 block w-full text-center text-white bg-blue-700 hover:bg-blue-900 px-2 py-1.5 rounded-md">Sign in</button>
            <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
              Sign in with Google
            </button>
            </Link>
          </div>
        </form>

        {/* <!-- Footer --> */}
        <div className="text-center">
          <span className="text-xs text-gray-400 font-semibold">Don&apos;t have account?</span>
          <a href="#" className="text-xs font-semibold text-blue-700">Sign up</a>
        </div>
        <div classNameName=' flex bg-white text-center justify-center object-center content-center'>
                <Image src='/raccoonbottom.png' classNameName=' text-center justify-center object-center content-center' height={100} width={100} />
            </div>
      </div>
    </div>

  </div>
  </div>

</div>
  )
}

export default login