import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = [
        'Python', 'C++', 'JavaScript (ES6+)',
        'React', 'HTML & CSS', 'Unreal Engine 5',
        'ESP32 / IoT', 'EasyEDA'
    ];

    return (
        <section id="about" ref={ref} className="max-w-[900px] mx-auto py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">About Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 text-slate text-lg leading-relaxed space-y-4">
                        <p>
                            Hello! My name is <strong className="text-green">Pem</strong> (Theerawit) and I enjoy creating things that live on the internet and in the physical world. My interest in technology started back when I was tinkering with RC mechanics, which taught me a lot about troubleshooting and logic.
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at a <span className="text-green">tech company (Horiza)</span> and founding my own freelance portfolio <span className="text-green">Horiza</span>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                        <p>
                            I am currently a 1st year computer engineering student at <span className="text-green">Kasetsart University</span>.
                        </p>
                        <p>Here are a few technologies I've been working with recently:</p>

                        <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                            {skills.map((skill) => (
                                <li key={skill} className="flex items-center text-slate before:content-['▹'] before:text-green before:mr-2">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 relative group">
                        <div className="relative w-full max-w-[300px] aspect-square rounded bg-green/20 hover:bg-transparent transition-all duration-300 shadow-xl overflow-hidden cursor-pointer group-hover:-translate-y-2 group-hover:-translate-x-2">
                            <div className="absolute inset-0 bg-green/20 mix-blend-screen hover:mix-blend-normal transition-all duration-300"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}pem.png`}
                                alt="Profile"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
                            />
                        </div>
                        <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};


export default About;
