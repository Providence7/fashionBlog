import React from 'react'
import Image from './Image'
const Comment = () => {
  const username = "Hollasunkanmi"
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
    <div className="flex items-center gap-4">
      {/* {comment.user.img && ( */}
        <Image
         src="icons3.svg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
      {/* )} */}
     <span className="font-medium">{username}</span> 
      <span className="text-sm text-gray-500">
        {/* {format(comment.createdAt)} */}
      </span>
      {/* {user && */}
         {/* (comment.user.username === user.username || role === "admin") && ( */}
          <span
            // className="text-xs text-red-500 hover:text-red-900 cursor-pointer"
            // onClick={() => mutation.mutate()}
          >
            {/* delete */}
            {/* {mutation.isPending && <span>(in progress)</span>} */}
          </span>
        {/* )} */}
    </div>
    <div className="mt-4">
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, natus optio nihil quo pariatur illum! Quasi dolor, iusto repellendus quia ducimus assumenda ab omnis perferendis nostrum deleniti nobis veritatis eos.</p>
    </div>
  </div>
  )
}

export default Comment