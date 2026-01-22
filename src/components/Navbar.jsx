import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const sidebarVariants = {
        open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
        closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-[70px] shadow-lg' : 'bg-transparent h-[100px]'
                } flex items-center justify-end px-6 md:px-12`}
        >
            {/* Logo */}


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <ol className="flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <a
                                href={link.href}
                                className="text-lightest-slate hover:text-green font-mono text-sm transition-colors duration-300"
                            >
                                <span className="text-green mr-1">0{index + 1}.</span>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ol>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href={`${import.meta.env.BASE_URL}Resume_Theerawit_Waithayawan.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-green text-green px-4 py-2 rounded text-sm font-mono hover:bg-green/10 transition-colors duration-300"
                    >
                        Resume
                    </a>
                </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
                <button onClick={toggleMenu} className="text-green focus:outline-none">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.aside
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                            className="fixed top-0 right-0 h-full w-[75vw] bg-light-navy z-50 flex flex-col items-center justify-center shadow-2xl md:hidden"
                        >
                            <ol className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link, index) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={toggleMenu}
                                            className="text-lightest-slate hover:text-green font-mono text-lg flex flex-col"
                                        >
                                            <span className="text-green mb-2 text-sm">0{index + 1}.</span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                            <a
                                href={`${import.meta.env.BASE_URL}Resume_Theerawit_Waithayawan.pdf`}
                                className="mt-12 border border-green text-green px-8 py-3 rounded text-sm font-mono hover:bg-green/10 transition-colors duration-300"
                            >
                                Resume
                            </a>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
