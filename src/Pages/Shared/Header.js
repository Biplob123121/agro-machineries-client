import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user ?
            <li> <button onClick={logout} className="btn btn-ghost">Sign Out</button> </li>
            :
            <>
                <li> <Link to='/login'>Login</Link> </li>
                <li><Link to='/register'>Register</Link></li>
            </>}

    </>;
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Agro Machineries</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;

// https://i.ibb.co/3RhsF1V/pic-1.png
// https://i.ibb.co/Bt7Qk4D/pic-3.png
// https://i.ibb.co/NpMkjLS/pic-6.png
// https://i.ibb.co/VVtG7JR/pic-4.png
// https://i.ibb.co/SVQ9X7q/pic-5.png
// https://i.ibb.co/xqmP0XF/pic-2.png