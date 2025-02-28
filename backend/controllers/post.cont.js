import posts from "../models/posts.model.js";



//  getting all blog-posts
export const getPosts  = async(req, res) =>{
    try {
        const post  = await posts.finds()
        res.status(200).json(post)
    } catch (error) {
        res.error()
    }
}

//  getting all blog-post

export const getPost  = async(req,res) =>{
    const post  = await posts.findOne({slug:req.params.slug})
    res.status(200).json(post)
}

//  getting all blog-post

export const createPost  = async(req,res) =>{
    const post  = new posts(req.body)
    const create = await post.save()
    res.status(200).json(create)
}
 
//  deleting  blog-post

export const deletePost  = async(req,res) =>{
   const post  = await posts.findByIdAndDelete(req.params.id)
   res.status(200).json({message : "post as being"})
    
}
