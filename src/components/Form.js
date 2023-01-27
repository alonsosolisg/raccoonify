import Link from 'next/link'
import React from 'react'

const Form = () => {
  return (
    <div>
        {/* <!-- component --> */}
<div class="flex items-center justify-center p-12">
  {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Budget Number
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your budget here..."
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Hourly Rate
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Your hourly rate..."
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Favorite Stores
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="List your favorite online stores..."
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <Link href='/settings'>
        <button
          class="hover:shadow-form rounded-md bg-blue-900 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
        </Link>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Form