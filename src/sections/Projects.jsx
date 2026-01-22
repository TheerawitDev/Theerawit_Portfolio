import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const featuredProjects = [
        {
            title: 'ScholarGuide',
            description: 'A comprehensive platform for students, providing resources and guides for academic success. (scholarguide.net)',
            tech: ['Web Development', 'React', 'Education'],
            links: { github: '#', external: 'https://scholarguide.net' },
            image: `${import.meta.env.BASE_URL}ScholarGuide.png`
        },
        {
            title: 'Pimdee.games',
            description: 'A typing practice web application that is currently live. Provides real-time typing statistics and different practice modes.',
            tech: ['React', 'Supabase', 'Tailwind'],
            links: { github: '#', external: '#' },
            image: `${import.meta.env.BASE_URL}pimdee.png`
        },
        {
            title: 'StoryMap (v2)',
            description: 'A web application for tracking filming locations. Currently developing version 2 and investigating utility patents for its unique algorithms.',
            tech: ['Next.js', 'Google Maps API', 'Algolia'],
            links: { github: '#', external: '#' },
            image: `${import.meta.env.BASE_URL}storymap.png`
        }
    ];

    const otherProjects = [
        {
            title: 'Trustify',
            description: 'A Python-based project focused on scam detection algorithms for safer online interactions.',
            tech: ['Python', 'AI/ML']
        },
        {
            title: 'Line Stickers',
            description: 'A creative project designing a character set featuring a "chubby orange cat".',
            tech: ['Design', 'Illustration']
        },
        {
            title: 'Hardware / Robotics',
            description: 'Experience troubleshooting RC mechanics (WLtoys 144001) and working with ESP32 modules.',
            tech: ['ESP32', 'C++', 'Hardware']
        }
    ];

    return (
        <section id="projects" ref={ref} className="max-w-[1000px] mx-auto py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">Some Things I've Built</h2>

                {/* Featured Projects Grid */}
                <div className="flex flex-col gap-24 mt-10">
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`relative grid grid-cols-12 items-center gap-10 ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                            {/* Image area (placeholder) */}
                            <div className={`col-span-12 md:col-span-7 h-[300px] bg-green/20 rounded relative cursor-pointer overflow-hidden group ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                                <div className="absolute inset-0 bg-navy/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className={`col-span-12 md:col-span-5 relative z-10 ${i % 2 !== 0 ? 'md:text-left text-left' : 'md:text-right text-right'} md:ml-[-50px] ${i % 2 !== 0 ? 'md:mr-[-50px] md:ml-0' : ''}`}>
                                <p className="font-mono text-green text-sm my-2">Featured Project</p>
                                <h3 className="text-2xl font-bold text-lightest-slate hover:text-green cursor-pointer transition-colors mb-4">{project.title}</h3>
                                <div className="bg-light-navy p-6 rounded shadow-xl text-slate text-sm">
                                    {project.description}
                                </div>
                                <ul className={`flex flex-wrap mt-4 gap-4 text-mono text-xs text-slate ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    {project.tech.map(t => <li key={t}>{t}</li>)}
                                </ul>
                                <div className={`flex mt-5 gap-4 ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                                    <Github className="w-5 h-5 hover:text-green cursor-pointer" />
                                    <ExternalLink className="w-5 h-5 hover:text-green cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Noteworthy Projects */}
                <div className="mt-32">
                    <h3 className="text-2xl font-bold text-lightest-slate mb-10 text-center">Other Noteworthy Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {otherProjects.map((project, i) => (
                            <div key={i} className="bg-light-navy p-8 rounded hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-green group cursor-pointer h-full flex flex-col justify-between">
                                <header>
                                    <div className="flex justify-between items-center mb-8">
                                        <Folder className="w-10 h-10 text-green" />
                                        <ExternalLink className="w-5 h-5 text-slate group-hover:text-green" />
                                    </div>
                                    <h3 className="text-xl font-bold text-lightest-slate mb-2 group-hover:text-green">{project.title}</h3>
                                    <p className="text-slate text-sm mb-4">
                                        {project.description}
                                    </p>
                                </header>
                                <footer className="text-mono text-xs text-slate flex gap-3 mt-4">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </footer>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Projects;
