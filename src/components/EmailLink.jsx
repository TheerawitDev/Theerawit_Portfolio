import React from 'react';
import { motion } from 'framer-motion';

const EmailLink = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="hidden md:flex fixed bottom-0 right-10 flex-col items-center space-y-6 z-10 w-10 text-light-slate after:content-[''] after:w-[1px] after:h-[90px] after:bg-light-slate"
        >
            <a
                href="pm.theerawit@gmail.com"
                className="font-mono text-xs tracking-widest hover:text-green hover:-translate-y-1 transition-all duration-300 vertical-rl"
                style={{ writingMode: 'vertical-rl' }}
            >
                pm.theerawit@gmail.com
            </a>
        </motion.div>
    );
};

export default EmailLink;
