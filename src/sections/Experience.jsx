import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { jobs } from '../data/experience';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="experience" ref={ref} className="max-w-[700px] mx-auto py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-heading">Where I've Worked</h2>

                <div className="flex flex-col md:flex-row gap-4 mt-10">
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-lightest-navy w-full md:w-max scrollbar-hide">
                        {jobs.map((job, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`text-sm font-mono px-5 py-3 text-left min-w-[120px] transition-all duration-300 border-l-[2px] -ml-[2px] ${activeTab === index
                                    ? 'text-green border-green bg-light-navy/50'
                                    : 'text-slate border-transparent hover:bg-light-navy/30 hover:text-green'
                                    }`}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>

                    <div className="py-2 px-4 w-full">
                        <h3 className="text-xl font-medium text-lightest-slate">
                            {jobs[activeTab].role} <span className="text-green">@ {jobs[activeTab].company}</span>
                        </h3>
                        <p className="font-mono text-sm text-slate mb-5 mt-1">{jobs[activeTab].period}</p>
                        <ul className="space-y-4">
                            {jobs[activeTab].description.map((point, i) => (
                                <li key={i} className="flex items-start text-slate relative pl-5 before:content-['▹'] before:text-green before:absolute before:left-0">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
