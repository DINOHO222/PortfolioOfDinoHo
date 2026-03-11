import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences, education, achievements } from '../data/resume';
import FadeIn from './FadeIn';

type TabType = 'experience' | 'education' | 'achievements';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: 'experience', label: '經歷與實作', icon: Briefcase },
    { id: 'education', label: '學歷背景', icon: GraduationCap },
    { id: 'achievements', label: '證照與成就', icon: Award },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar / Tabs */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 md:mb-8">Career.</h2>
            <div className="flex flex-col gap-2 border-l-2 border-chic-gray/30 pl-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl font-medium transition-all duration-300 flex items-center gap-3 border-l-4 -ml-[3px] 
                    ${activeTab === tab.id
                      ? 'border-chic-orange text-chic-black bg-white shadow-sm'
                      : 'border-transparent text-gray-400 hover:text-chic-black'}`}
                >
                  <tab.icon className={`w-5 h-5 md:w-6 md:h-6 ${activeTab === tab.id ? 'text-chic-orange' : ''}`} />
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 min-h-[300px] md:min-h-[400px]">
          <div className="grid gap-6 md:gap-8">
            {activeTab === 'experience' && experiences.map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="group border-b border-chic-black/10 pb-6 md:pb-8 hover:pl-4 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl md:text-3xl font-bold group-hover:text-chic-orange transition-colors">{item.role}</h3>
                  <span className="text-sm md:text-lg font-serif italic text-gray-500 mt-1 md:mt-0">{item.period}</span>
                </div>
                <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-chic-black/80">{item.company}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl text-justify md:text-left">{item.desc}</p>
              </FadeIn>
            ))}

            {activeTab === 'education' && education.map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="group border-b border-chic-black/10 pb-6 md:pb-8 hover:pl-4 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl md:text-3xl font-bold group-hover:text-chic-orange transition-colors">{item.degree}</h3>
                  <span className="text-sm md:text-lg font-serif italic text-gray-500 mt-1 md:mt-0">{item.year}</span>
                </div>
                <h4 className="text-lg md:text-xl font-medium text-gray-700">{item.school}</h4>
                <div className="mt-4 flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600 font-mono">
                  <span className="border border-chic-gray px-2 py-1 rounded">GPA: 3.4</span>
                  <span className="border border-chic-gray px-2 py-1 rounded">班排: 20%</span>
                  <span className="border border-chic-gray px-2 py-1 rounded">系排: 27%</span>
                </div>
              </FadeIn>
            ))}

            {activeTab === 'achievements' && achievements.map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="group border-b border-chic-black/10 pb-6 md:pb-8 hover:pl-4 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl md:text-3xl font-bold group-hover:text-chic-orange transition-colors">{item.name}</h3>
                  <span className="text-sm md:text-lg font-serif italic text-gray-500 mt-1 md:mt-0">{item.period}</span>
                </div>
                <h4 className="text-lg md:text-xl font-medium mb-2 text-chic-black/80">{item.role}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl text-justify md:text-left">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;