import React from 'react'
import Image from "./Image"
import { Link } from 'react-router-dom'
const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* first */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* image */}
        <Image src="blog4.jfif" alt="featured image" className="rounded-3xl object-cover" />
        {/* details */}
        <div className='flex items-center gap-4' >
            <h1 className='font-semibold lg:text-lg'>01. </h1>
            <Link className='text-[#c4458f] italic lg:text-lg'>Fashion Market </Link>
            <span className='text-gray-500'>3 days ago</span>
        </div>
        {/* title */}
        <Link className='text-xl lg:text-3xl font-semibold lg:font-bold'>
        LORENM FASHION MARKETEE
        </Link>
        </div>
        {/* others */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
         {/* image */}
                   <Image src="blog2.png" alt="featured image"
            className="rounded-3xl object-cover w-1/3 aspect-video" />
         
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-[#c4458f]">Fashion Tech</Link>
              <span className="hidden text-gray-500 text-sm">4 days ago</span>
              </div>
               {/* title */}
              <Link
              to={"/"}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" >
                  
              Lorem ipsum dolor sit amet consectetur adipisicing
              </Link>
            </div>
      </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
         {/* image */}
                   <Image src="blog2.png" alt="featured image"
            className="rounded-3xl object-cover w-1/3 aspect-video" />
         
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-[#c4458f]">Fashion Tech</Link>
              <span className="hidden text-gray-500 text-sm">4 days ago</span>
              </div>
               {/* title */}
              <Link
              to={"/"}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" >
                  
              Lorem ipsum dolor sit amet consectetur adipisicing
              </Link>
            </div>
      </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
         {/* image */}
                   <Image src="blog2.png" alt="featured image"
            className="rounded-3xl object-cover w-1/3 aspect-video" />
         
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-[#c4458f]">Fashion Tech</Link>
              <span className="hidden text-gray-500 text-sm">4 days ago</span>
              </div>
               {/* title */}
              <Link
              to={"/"}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" >
                  
              Lorem ipsum dolor sit amet consectetur adipisicing
              </Link>
            </div>
      </div>
        </div>
        </div>

  )
}

export default FeaturedPost