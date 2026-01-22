import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="contact" ref={ref} className="max-w-[600px] mx-auto py-24 text-center mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-green text-base mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">Get In Touch</h2>
                <p className="text-slate text-lg mb-12">
                    I'm currently looking for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:pmtheerawit@gmail.com"
                    className="border border-green text-green px-8 py-5 rounded text-sm font-mono hover:bg-green/10 transition-colors duration-300"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
