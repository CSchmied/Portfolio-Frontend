// Layout.js
import React from 'react';
import NavbarComponent from './NavbarComponent';
import LoginNavbarComponent from './LoginNavbarComponent';
import FooterComponent from './FooterComponent';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const userString = localStorage.getItem('user');
    let user;

    if (userString) {
        user = JSON.parse(userString);
        console.log(user); // Now you can use the user object
}   else {
    console.log('No user data found in localStorage.');
}

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    };

    const handleLogin = () => {
        // Logic to handle login, e.g., redirecting to a login page or calling an API
        window.location.reload(); // Reload the page to reflect the login status
        window.location.href = '/login'; // Redirect to the login page
    };

    return (
        <>
            {pathname !== '/login' && (
                <div><NavbarComponent user={user} handleLogout={handleLogout} handleLogin={handleLogin} />
                <main>{children}</main></div>
            )}
            {pathname === '/login' && (
                <div><LoginNavbarComponent user={user} handleLogout={handleLogout} handleLogin={handleLogin} />
                <main>{children}</main></div>
            )}       
            <FooterComponent/>
             </>
    );
};

export default Layout;