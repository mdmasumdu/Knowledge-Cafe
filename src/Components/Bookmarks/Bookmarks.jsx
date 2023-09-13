import Bookmark from "./Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({bookmarks,spenttime}) => {
    return (
        <div className="w-1/3 mx-auto">

            
            <h1 className="text-center bg-slate-400 text-black font-bold"> Bookmarked:{bookmarks.length}</h1>

            <div className="text-center bg-slate-400 text-black font-bold">Spenttime:{spenttime}</div>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;