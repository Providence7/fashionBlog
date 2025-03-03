import { Webhook } from "svix";
import  User from "../models/users.model.js"

export const clerkWebhoook = async (req, res)=>{
    const WEBHOOK = process.env.WEBHOOK_SECRET
    if(!WEBHOOK){
        throw new ERROR ("weeb hook secret needed")
    }
    const payload  = req.body;
    const headers = req.headers;
    const wh = new Webhook(WEBHOOK);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message :"webhook verification failed"
        });
    }
    // console.log(evt.data)
    if(evt.type === "user.created"){
        const newUser  = new User({
            clerkId:evt.data.id,
            username : evt.data.username ||  evt.data.email_addresses[0].email_address,
            email : evt.data.email_addresses[0].email_address,
            img : evt.data.profile_img_url
        })
        await newUser.save()
    }
return res.status(200).json({
    message : "webhook received"
})

}