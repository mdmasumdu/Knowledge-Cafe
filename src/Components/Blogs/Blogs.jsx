import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        fetch('Data.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])



    return (
        <div>
            <h3 className="text-center font-bold text-3xl mt-10">Total Blogs:{blogs.length}</h3>
        </div>
    );
};

export default Blogs;