import React from 'react';
import { X, ExternalLink, Youtube, Instagram, Trophy } from 'lucide-react';
import { Project } from '../types';

interface PortfolioModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  const { modalDetails } = project;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-chic-black/80 backdrop-blur-sm p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-chic-white border-2 border-chic-black w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-[12px_12px_0px_0px_rgba(255,79,0,1)] animate-modal-pop origin-center perspective-1000 flex flex-col no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-chic-black text-white p-4 md:p-6 sticky top-0 z-10 flex justify-between items-start border-b border-white/10">
           {/* Decorative corner accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-chic-orange"></div>

          <div className="pl-4 animate-slide-up-fade [animation-delay:100ms] opacity-0">
            <span className="text-chic-orange font-mono text-xs tracking-widest uppercase mb-1 block">
              Project Details
            </span>
            <h3 className="text-xl md:text-3xl font-bold uppercase tracking-wider font-serif leading-none pr-4">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="hover:text-chic-orange transition-colors animate-slide-up-fade [animation-delay:150ms] opacity-0 shrink-0"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          
          {/* Layout 1: Story & Links (Like WhatThe髮) */}
          {modalDetails?.longDescription && (
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-chic-black animate-slide-up-fade [animation-delay:200ms] opacity-0">
                <h4 className="font-bold text-lg md:text-xl border-l-4 border-chic-orange pl-4 mb-4">開發心路歷程</h4>
                {/* Changed text color to chic-black and added font-medium for better readability */}
                <p className="whitespace-pre-line text-chic-black font-medium leading-relaxed text-justify text-base md:text-lg">
                  {modalDetails.longDescription}
                </p>
              </div>

              <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 animate-slide-up-fade [animation-delay:300ms] opacity-0">
                {modalDetails.youtubeUrl && (
                  <a 
                    href={modalDetails.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-chic-black bg-white text-chic-black hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Youtube className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80">Watch Video</span>
                        <span className="font-bold text-sm md:text-base">成果展示 YouTube</span>
                    </div>
                    <ExternalLink className="ml-auto w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {modalDetails.awardUrl && (
                  <a 
                    href={modalDetails.awardUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-chic-black bg-white text-chic-black hover:bg-chic-orange hover:text-white hover:border-chic-orange transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Trophy className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80">Award List</span>
                        <span className="font-bold text-sm md:text-base">查看得獎名單</span>
                    </div>
                    <ExternalLink className="ml-auto w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Layout 2: Social Buttons Only (Like 街舞比賽) */}
          {modalDetails?.socialLinks && (
            <div className="flex flex-col gap-4">
               {/* Changed text color to darker black and larger font */}
               <p className="text-chic-black font-bold font-serif italic mb-4 text-base md:text-lg animate-slide-up-fade [animation-delay:200ms] opacity-0">請選擇以下平台查看更多活動紀錄：</p>
               {modalDetails.socialLinks.map((link, idx) => (
                 <a 
                   key={idx}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`flex items-center justify-center gap-3 p-4 md:p-6 border-2 border-chic-black text-lg md:text-xl font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-chic-black animate-slide-up-fade opacity-0
                     ${link.platform === 'Instagram' ? 'bg-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent' : ''}
                     ${link.platform === 'Youtube' ? 'bg-white hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]' : ''}
                   `}
                   style={{ animationDelay: `${300 + idx * 100}ms` }}
                 >
                    {link.platform === 'Instagram' && <Instagram className="w-6 h-6 md:w-8 md:h-8" />}
                    {link.platform === 'Youtube' && <Youtube className="w-6 h-6 md:w-8 md:h-8" />}
                    {link.platform}
                 </a>
               ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;