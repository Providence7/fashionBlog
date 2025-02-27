import React from 'react'
import {Link} from "react-router-dom"
import Search from './Search'
const MainCatergories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl
    p-4 shadow-lg items-center justify-center gap-8 xl'>
        {/* LInks */}
       <div className='flex-1 flex items-center justify-between flex-wrap'>
       <div className=''>
       <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Materials
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Female
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Male
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
        </div>
        {/* search */}
        <div>
            <Search/>
        </div>
       </div>
    </div>
  )
}

export default MainCatergories
 