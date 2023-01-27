import Link from 'next/link'
import React from 'react'

const settings = () => {
  return (
    <section className='h-screen'>        
        <>
      <div className=" h-screen relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-blue-400 border-0">
        <div className=" bg-blue-800 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <Link href='/'>
                <h6 className="text-white text-xl font-bold">Settings </h6>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div className="flex flex-wrap">
          
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">

                <label class="relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activate Timeout</span>
                </label>
                <label class="ml-10 relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Allow Blocking</span>
                </label>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Timeout Setting
                  </label>
                  <div className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    Minutes you want the timeout to last
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                <label class="mt-4 relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Warning/blockers when you shop too often on one site</span>
                </label>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Control To Stop Shopping
                  </label>
                  <label class="mt-4 relative inline-flex items-center mb-0 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Blocked for me</span>
                </label>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
            
                <label class="mt-0 relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">A raccoon will ask sadly why I am back</span>
                </label>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price To Hourly Conversion
                  </label>
                  <label class="mt-0 relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Convert Savings and Spendings to Hours Worked </span>
                </label>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
    </section>
  )
}

export default settings