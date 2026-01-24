import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/projects';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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
                        <div key={i} className={`relative grid grid-cols-12 items-center gap-10 ${i % 2 !== 0 ? 'text-left' : 'text-left md:text-right'}`}>
                            {/* Image area */}
                            <div className={`col-span-12 md:col-span-7 h-[300px] bg-green/20 rounded relative cursor-pointer overflow-hidden group ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                                <div className="absolute inset-0 bg-navy/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"></div>
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image}`}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className={`col-span-12 md:col-span-5 relative z-10 ${i % 2 !== 0 ? 'text-left' : 'text-left md:text-right'} md:ml-[-50px] ${i % 2 !== 0 ? 'md:mr-[-50px] md:ml-0' : ''}`}>
                                <p className="font-mono text-green text-sm my-2">Featured Project</p>
                                <h3 className="text-2xl font-bold text-lightest-slate hover:text-green cursor-pointer transition-colors mb-4">{project.title}</h3>
                                <div className="bg-light-navy p-6 rounded shadow-xl text-slate text-sm">
                                    {project.description}
                                </div>
                                <ul className={`flex flex-wrap mt-4 gap-4 text-mono text-xs text-slate ${i % 2 !== 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                    {project.tech.map(t => <li key={t}>{t}</li>)}
                                </ul>
                                <div className={`flex mt-5 gap-4 ${i % 2 !== 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                    {project.links.github && project.links.github !== '#' && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                            <Github className="w-5 h-5 hover:text-green cursor-pointer" />
                                        </a>
                                    )}
                                    {project.links.external && project.links.external !== '#' && (
                                        <a href={project.links.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                            <ExternalLink className="w-5 h-5 hover:text-green cursor-pointer" />
                                        </a>
                                    )}
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
                                        <div className="flex gap-4">
                                            {project.links?.github && project.links.github !== '#' && (
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                                    <Github className="w-5 h-5 text-slate hover:text-green cursor-pointer" />
                                                </a>
                                            )}
                                            {project.links?.external && project.links.external !== '#' && (
                                                <a href={project.links.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                                    <ExternalLink className="w-5 h-5 text-slate hover:text-green cursor-pointer" />
                                                </a>
                                            )}
                                        </div>
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
