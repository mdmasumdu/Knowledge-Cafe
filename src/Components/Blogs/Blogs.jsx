/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({bookmarkHandler,markasreadHandler}) => {

    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        fetch('Data.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])



    return (
        <div className="w-2/3">
            <h3 className="font-bold text-center bg-slate-400 text-black">Total Blogs:{blogs.length}</h3>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} bookmarkHandler={bookmarkHandler} markasreadHandler={markasreadHandler}></Blog>)
            }
        </div>
    );
};

export default Blogs;