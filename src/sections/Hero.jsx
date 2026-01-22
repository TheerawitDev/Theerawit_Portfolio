import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center max-w-[1200px] mx-auto -mt-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full items-center">

                {/* Text Content */}
                <div className="lg:col-span-2 flex flex-col items-start order-2 lg:order-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-green font-mono text-base mb-5 ml-1"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-4xl sm:text-7xl font-bold text-lightest-slate mb-2 tracking-tight"
                    >
                        Theerawit Waithayawan.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-3xl sm:text-6xl font-bold text-slate mb-6 tracking-tight"
                    >
                        I build things for the web.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="max-w-[540px] text-slate text-lg mb-12 sm:text-xl leading-relaxed"
                    >
                        I'm a software engineer based in Bangkok, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on robotics and tech at <span className="text-green">Luthenos Ltd</span>.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                    >
                        <a
                            href="#projects"
                            className="border border-green text-green px-7 py-4 rounded text-sm font-mono hover:bg-green/10 transition-colors duration-300"
                        >
                            Check out my work!
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
