import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, Youtube, Instagram, Trophy, ZoomIn, ZoomOut, Image as ImageIcon, Github, Globe } from 'lucide-react';
import { Project } from '../types';
import LazyImage from './LazyImage';
import { useImagePanZoom } from '../hooks/useImagePanZoom';

interface PortfolioModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, isOpen, onClose }) => {
  const [viewerImage, setViewerImage] = useState<{ title: string, url: string } | null>(null);
  const [showRequirements, setShowRequirements] = useState(false);

  const {
    imageRef,
    zoomScale,
    zoomIn,
    zoomOut,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useImagePanZoom(viewerImage?.url || null);

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

                {modalDetails.webAppUrl && (
                  <a
                    href={modalDetails.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-chic-black bg-white text-chic-black hover:bg-chic-orange hover:text-white hover:border-chic-orange transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Globe className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80">Live Demo</span>
                      <span className="font-bold text-sm md:text-base">前往 Web App</span>
                    </div>
                    <ExternalLink className="ml-auto w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {modalDetails.githubUrl && (
                  <a
                    href={modalDetails.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-chic-black bg-white text-chic-black hover:bg-chic-black hover:text-white hover:border-chic-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80">Source Code</span>
                      <span className="font-bold text-sm md:text-base">GitHub 原始碼</span>
                    </div>
                    <ExternalLink className="ml-auto w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {/* Feature Images Toggle Button */}
                {modalDetails.featureImages && modalDetails.featureImages.length > 0 && (
                  <button
                    onClick={() => setShowRequirements(true)}
                    className="w-full flex items-center gap-4 p-4 border border-chic-black bg-white text-chic-black hover:bg-chic-orange hover:text-white hover:border-chic-orange transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <ImageIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80">System Requirements</span>
                      <span className="font-bold text-sm md:text-base">系統需求文件</span>
                    </div>
                    <ExternalLink className="ml-auto w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
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

      {/* System Requirements Grid Modal */}
      {
        showRequirements && modalDetails?.featureImages && (
          <div
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-chic-black/95 p-4 animate-slide-up-fade"
            onClick={(e) => { e.stopPropagation(); setShowRequirements(false); }}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
              <span className="text-white font-bold tracking-wider">系統需求文件細項</span>
              <button
                onClick={() => setShowRequirements(false)}
                className="text-white hover:text-chic-orange transition-colors"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-12"
              onClick={(e) => e.stopPropagation()}
            >
              {modalDetails.featureImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewerImage(img);
                  }}
                  className="flex flex-col items-center justify-center p-4 border border-chic-black bg-white text-chic-black hover:bg-chic-orange hover:text-white hover:border-chic-orange transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <ImageIcon className="w-8 h-8 md:w-10 md:h-10 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-sm text-center flex flex-col items-center">
                    {img.title.split(' ').map((textLine, i) => (
                      <span key={i}>{textLine}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      }

      {/* Fullscreen Image Viewer Modal */}
      {
        viewerImage && (
          <div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-chic-black/95 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Viewer Header */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent z-50 pointer-events-none">
              <span className="text-white font-bold tracking-wider pointer-events-auto">{viewerImage.title}</span>
              <div className="flex gap-4 pointer-events-auto">
                <button
                  onClick={zoomIn}
                  className="text-white hover:text-chic-orange transition-colors"
                  title="放大"
                >
                  <ZoomIn className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={zoomOut}
                  className="text-white hover:text-chic-orange transition-colors"
                  title="縮小"
                >
                  <ZoomOut className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={() => setViewerImage(null)}
                  className="text-white hover:text-chic-orange transition-colors ml-4 border-l border-white/20 pl-4"
                  title="關閉"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
            </div>

            {/* Viewer Image */}
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden z-10"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              <LazyImage
                ref={imageRef}
                src={viewerImage.url}
                alt={viewerImage.title}
                skeletonClassName="flex items-center justify-center" // Removed w-full h-full to prevent taking too much space
                className="max-h-screen max-w-none transition-transform duration-100 ease-out origin-center cursor-grab"
                draggable={false}
              />
            </div>
          </div>
        )
      }
    </div >
  );
};

export default PortfolioModal;