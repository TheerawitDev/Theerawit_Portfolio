import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailLink = () => {
    const [copied, setCopied] = useState(false);
    const email = "pm.theerawit@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="hidden md:flex fixed bottom-0 right-10 flex-col items-center space-y-6 z-10 w-10 text-light-slate after:content-[''] after:w-[1px] after:h-[90px] after:bg-light-slate"
        >
            <div className="relative group">
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute right-8 top-1/2 -translate-y-1/2 bg-green text-navy text-xs font-mono py-1 px-2 rounded whitespace-nowrap pointer-events-none"
                        >
                            Copied!
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    onClick={handleCopy}
                    className="font-mono text-xs tracking-widest hover:text-green hover:-translate-y-1 transition-all duration-300 vertical-rl cursor-pointer select-none"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    {email}
                </div>
            </div>
        </motion.div>
    );
};

export default EmailLink;
