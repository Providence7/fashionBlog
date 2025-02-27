import {Link}  from "react-router-dom"
import { useState } from "react";
import MainCatergories from "../components/MainCatergories"
import Search from "../components/Search"
import PostList from "../components/PostList"
import FeaturedPost from "../components/FeaturedPost"
const Homepage = () => {
    const [open, setOpen] = useState(false);
  
  return (
    <div  className="mt-5 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div  className="flex gap-4">
        <Link to={'/'} className="italic">Home</Link>
        <span>.</span>
        <span className="text-[#c4458f]">Blogs and  Articles</span>

      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-2xl text-[#0d1321] md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?</h1>
          <p className="mt-7 italic text-sm md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Asperiores enim ipsa, rerum ratione odit </p>
        </div>
        {/* animated button */}
        <Link to={"/write"} className="hidden md:block relative">
        <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
                      </svg>
      

        </Link>
      </div>
      {/* catergories */}
      <MainCatergories/>
      <div className="md:hidden">
      {/* <Search/> */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-[#c4458f] text-sm text-white px-4 py-2  rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      </div>
      {/* FEATRURED POSTS */}
      <FeaturedPost />
      {/* POST LIST*/}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList/>
      </div>
     </div>
  )
}

export default Homepage