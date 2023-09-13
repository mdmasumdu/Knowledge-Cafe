import profile from '../assets/images/profile.png'


const Header = () => {
    return (
        <div className='flex justify-between items-center mt-10 border-b-2 p-5'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;