import React from 'react';
import { Github, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/TheerawitDev' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/theerawit-waithayawan/' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/therawitit/' },
];

const SocialIcons = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="hidden md:flex fixed bottom-0 left-10 flex-col items-center space-y-6 z-10 w-10 text-light-slate after:content-[''] after:w-[1px] after:h-[90px] after:bg-light-slate"
        >
            {socialLinks.map((item) => (
                <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green hover:-translate-y-1 transition-all duration-300"
                >
                    {item.icon}
                </a>
            ))}
        </motion.div>
    );
};

export default SocialIcons;
