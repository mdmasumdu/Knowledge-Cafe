
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'



function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [spenttime,setSpenttime] = useState(0)

  const markasreadHandler =(time)=>{
    console.log(time)
   setSpenttime(spenttime + time)
  }

  const bookmarkHandler =(blog)=>{
    {
    const isexist=  bookmarks.find(bookmark=>bookmark.id===blog.id)
      if(isexist){
        return alert('alredy added')
      }
    }
    

    const newItem =[...bookmarks,blog]
    setBookmarks(newItem)
    
    }
  return (
    <>
    <Header></Header>
   <div className='flex gap-9 container mx-auto'>
   <Blogs bookmarkHandler={bookmarkHandler} markasreadHandler={markasreadHandler}></Blogs>
   <Bookmarks bookmarks={bookmarks} spenttime={spenttime} ></Bookmarks>
   
   </div>
       
    </>
  )
}

export default App
