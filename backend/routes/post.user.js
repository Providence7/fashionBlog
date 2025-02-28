import express from "express"
import { getPost, getPosts,createPost,deletePost } from "../controllers/post.cont.js"
const router = express.Router()

router.get('/',getPosts)
router.get('/:slug', getPost)
router.post('/',createPost)
router.delete('/delete/:id',deletePost)



export default router