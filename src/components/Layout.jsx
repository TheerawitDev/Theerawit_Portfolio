import React from 'react';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import EmailLink from './EmailLink';

const Layout = ({ children }) => {
    return (
        <div className="bg-navy min-h-screen text-slate selection:bg-green selection:text-navy">
            <Navbar />
            <SocialIcons />
            <EmailLink />
            <main className="px-6 md:px-[150px] max-w-[1600px] mx-auto pb-20 pt-[100px]">
                {children}
            </main>

            {/* Footer for mobile/centering credits */}
            <footer className="md:hidden flex flex-col items-center py-6 text-light-slate font-mono text-xs">
                <p>Designed & Built by Theerawit</p>
            </footer>
        </div>
    );
};

export default Layout;
