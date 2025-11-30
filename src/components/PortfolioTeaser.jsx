import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Gitlab } from 'lucide-react';

const PortfolioTeaser = () => {
    const { t } = useTranslation();

    const projects = [
        { id: 'commu', key: 'commu', github: 'https://github.com/anas-ash99/commu-mobile-android', gitlab: '#', external: '#' },
        { id: 'astra', key: 'astra', github: 'https://github.com/anas-ash99/astra', gitlab: '#', external: '#' },
        { id: 'microservices', key: 'microservices', github: 'https://github.com/anas-ash99/deployment-manifest-passgenius', gitlab: '#', external: '#' },
    ];

    return (
        <section id="portfolio" className="py-20">
            <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
                <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">03.</span> {t('portfolio.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {projects.map((project) => (
                    <div key={project.id} className="bg-navy-800 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 group relative">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0"></a>
                        <div className="flex justify-between items-center mb-4 relative z-10">
                            <div className="flex gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                                    <Github className="w-8 h-8" />
                                </a>
                                <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                                    <Gitlab className="w-8 h-8" />
                                </a>
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                                <ExternalLink className="w-6 h-6" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
                            {t(`portfolio.${project.key}.title`)}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                            {t(`portfolio.${project.key}.description`)}
                        </p>
                        <div className="flex gap-3 text-xs font-mono text-slate-400">
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Node.js</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Link
                    to="/all-projects"
                    className="inline-block border border-teal-400 text-teal-400 px-8 py-4 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm"
                >
                    {t('portfolio.viewAll')}
                </Link>
            </div>
        </section>
    );
};

export default PortfolioTeaser;
