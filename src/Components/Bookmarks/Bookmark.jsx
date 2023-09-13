/* eslint-disable react/prop-types */
const Bookmark = ({bookmark}) => {
    return (
        <div className="mt-8">
            <p className="bg-slate-400 text-black p-5">{bookmark.title}</p>
            
        </div>
    );
};

export default Bookmark;