
"use client";

import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className=" flex justify-between items-center">
        <div className='w-full md:w-[50%]  my-16 flex flex-col gap-5 text-justify'>

        <h1 className='text-5xl font-bold'>Give the Gift of Life - Donate Blood Today!</h1>
        <p>In Islam, saving a life is like saving all of humanity. By donating blood, you're not only helping those in need but also earning rewards from Allah (SWT). Your small act of kindness can save lives and make a big difference.</p>
        <div className='flex gap-2'>
          <Link href={"/recipient"}>
            <button className='px-6 py-3 rounded-md border  border-red-800  hover:text-white hover:bg-red-800 '>Blood Request</button>
          </Link>
          <Link href={"/donor"}>
            <button className='px-6 py-3 rounded-md text-white bg-red-800 hover:text-black hover:bg-white hover:border border-red-800'>Become a Donar</button>
          </Link>
            </div>
        </div>
        {/* <div className='w-[40%]'>
        <Form/>
        </div> */}
        <div className='w-[40%] md:block hidden'><img src="https://img.freepik.com/free-vector/human-blood-donate-white-background_1308-111085.jpg" className='w-full' alt="" /></div>
    </div>
  )
}

export default Hero




// import { Button, Checkbox, Label, TextInput } from "flowbite-react";

// export function Form() {
//   return (
    
//     // <form className="flex max-w-md flex-col gap-4 border rounded-md shadow p-5 w-full">
//     //   <div>
//     //     <div className="mb-2 block">
//     //       <Label htmlFor="email1" value="Your email" />
//     //     </div>
//     //     <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
//     //   </div>
//     //   <div>
//     //     <div className="mb-2 block">
//     //       <Label htmlFor="password1" value="Your password" />
//     //     </div>
//     //     <TextInput id="password1" type="password" required />
//     //   </div>
//     //   <div className="flex items-center gap-2">
//     //     <Checkbox id="remember" />
//     //     <Label htmlFor="remember">Remember me</Label>
//     //   </div>
//     //   <Button type="submit">Submit</Button>
//     // </form>
//   );
// }
