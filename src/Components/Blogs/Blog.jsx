/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
const Blog = ({blog,bookmarkHandler,markasreadHandler}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div className='mt-8'>
            <img className='w-screen' src={cover} alt="" />
            <div className='flex justify-between'>

                <div className='flex gap-5 mt-5'>
                    <img className='w-14 rounded-2xl' src={author_img} alt="" />
                    <div>
                       <p> {author}</p>
                       <p> {posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <h3 className='mt-5'>{reading_time} <span>min read</span></h3>
                  <a onClick={()=>bookmarkHandler(blog)}>  <svg className='mt-5 bg-white' xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M14.593 1.32194C15.693 1.44994 16.5 2.39894 16.5 3.50694V18.9999L9 15.2499L1.5 18.9999V3.50694C1.5 2.39894 2.306 1.44994 3.407 1.32194C7.12319 0.890572 10.8768 0.890572 14.593 1.32194Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>

                </div>
            </div>
            <p className='text-3xl font-bold mt-5'>{title}</p>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}>#{hash}</span>)
                }
            </p>

            <a onClick={()=>markasreadHandler(reading_time)} className='text-blue-400'>Mark as Read</a>
            
        </div>
    );
};



Blog.proptypes ={
    blog:PropTypes.object
}
export default Blog;