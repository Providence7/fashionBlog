import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import PostListPage from "../src/routes/PostListPage.jsx"
import SinglePost from "../src/routes/SinglePostPage.jsx"
import About from "../src/routes/About.jsx"
import Write from "../src/routes/Write.jsx"
import Login from "../src/routes/Login.jsx"
import Register from "../src/routes/Register.jsx"
import Homepage from "../src/routes/Homepage.jsx"
import Mainlayout from './layout/Mainlayout.jsx'
import  {ClerkProvider}  from "@clerk/clerk-react"
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



const router = createBrowserRouter([
 {
  element : <Mainlayout />,
  children : [
    {
      path :"/",
      element : <Homepage />
    },
    {
      path : "/about",
      element: <About />
    }
    ,
    {
      path : "/login",
      element: <Login />
    }
    ,
    {
      path : "/register",
      element: <Register />
    }
    ,
    {
      path : "/posts",
      element: <PostListPage />
    }
    ,
    {
      path : "/post",
      element: <SinglePost />
    }
    ,
    {
      path : "/write",
      element: <Write />
    }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
</ClerkProvider>
</StrictMode>
 
)
