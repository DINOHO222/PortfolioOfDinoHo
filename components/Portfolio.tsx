import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import PortfolioModal from './PortfolioModal';
import LazyImage from './LazyImage';
import { projects } from '../data/projects';
import { usePortfolioModal } from '../hooks/usePortfolioModal';

const Portfolio: React.FC = () => {
  const { selectedProject, handleProjectClick, closeModal } = usePortfolioModal();

  return (
    <div className="bg-chic-black text-chic-white py-24">
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      )}

      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-chic-white/20 pb-8">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">Selected<br /><span className="text-chic-orange">Works</span></h2>
            <p className="text-right text-gray-400 mt-4 md:mt-0 max-w-xs font-light">
              專題競賽 • 活動企劃 • 前端開發<br />精選作品
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 150}>
              <div
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer h-full flex flex-col"
                data-cursor="hover"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 border border-white/10 rounded-sm">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    skeletonClassName="w-full h-full"
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 z-20 bg-chic-orange/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
                    <span className="text-chic-black text-lg font-bold uppercase border-2 border-chic-black px-6 py-3 bg-white hover:bg-chic-black hover:text-white transition-colors">
                      查看詳情
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start border-t border-white/20 pt-4 flex-1">
                  <div className="pr-4">
                    <span className="text-xs font-mono text-chic-orange uppercase mb-2 block tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-serif font-medium group-hover:text-chic-orange transition-colors mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{project.description}</p>
                  </div>
                  <div className="overflow-hidden shrink-0">
                    <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;