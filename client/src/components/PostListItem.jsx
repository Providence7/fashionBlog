import { Link } from "react-router-dom";
import Image from "./Image";
// import { format } from "timeago.js";

const PostListItem = ({ post }) => {

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src='blog4.jfif' className="rounded-2xl object-cover" w="753" h="500" />
        </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/`} className="text-4xl font-semibold">
          Lorem Market for Vhildreb
        </Link>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <span>Written by </span>
          <Link className="text-[#c4458f] text-xs" to="/">Olayemi Ease</Link>
          <span>a week ago</span>
        </div>
        {/* catergories */}
        <div>
          <Link className="text-[#c4458f] text-sm  " >FashionTech</Link>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipis-21wqsdaeficing elit.
           Dolorem modi accusamus doloremque explicabo dolorum omnis 
           voluptatem quam dicta, temporibus pariatur optio
            eligendi ut facilis? Mollitia nemo hic iure dolor magni.</p>
        <Link to='/post' className="underline text-[#c4458f] text-sm">
          Read More
          lorem
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;