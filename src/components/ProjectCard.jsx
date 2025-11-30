import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Gitlab } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-navy-800 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 group relative flex flex-col h-full">
            <a href={project.external} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0"></a>
            <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex gap-4">
                    {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                        <Github className="w-8 h-8" />
                    </a> */}
                    <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                        <Gitlab className="w-8 h-8" />
                    </a>
                </div>
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                </a>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">
                {t(`portfolio.${project.key}.title`)}
            </h3>
            <p className="text-slate-400 text-sm mb-4 flex-grow">
                {t(`portfolio.${project.key}.description`)}
            </p>
            <div className="flex gap-3 text-xs font-mono text-slate-400 mt-auto">
                {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
