import express from "express"
import bodyParser from "body-parser"
import { clerkWebhoook } from "../controllers/webhook.cont.js"
const router = express.Router()

router.post("/clerk", bodyParser.raw({ type: 'application/json' }),clerkWebhoook )

export default router