import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        { key: 'easy_software', type: 'work', link: 'https://www.linkedin.com/company/easy-software' },
        { key: 'hit', type: 'education', link: 'https://www.hit.ac.il/' },
    ];

    return (
        <section id="experience" className="py-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
                <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">04.</span> {t('experience.title')}
            </h2>
            <div className="relative border-l-2 border-navy-800 ml-3 rtl:mr-3 rtl:ml-0 rtl:border-r-2 rtl:border-l-0">
                {experiences.map((exp, index) => (
                    <div key={exp.key} className="mb-10 ml-6 rtl:mr-6 rtl:ml-0">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900 rtl:-right-3 rtl:left-auto">
                            <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-200">
                            {exp.type === 'work' ? t(`experience.${exp.key}.role`) : t(`experience.${exp.key}.degree`)}
                            <span className="hidden sm:inline-block mx-2 text-teal-400">@</span>
                            {exp.link ? (
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 block sm:inline hover:underline"
                                >
                                    {exp.type === 'work' ? t(`experience.${exp.key}.company`) : t(`experience.${exp.key}.school`)}
                                </a>
                            ) : (
                                <span className="text-teal-400 block sm:inline">
                                    {exp.type === 'work' ? t(`experience.${exp.key}.company`) : t(`experience.${exp.key}.school`)}
                                </span>
                            )}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400 font-mono">
                            {t(`experience.${exp.key}.period`)}
                        </time>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
