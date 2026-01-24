import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import FadeIn from './FadeIn';
import PortfolioModal from './PortfolioModal';

// ========================================================================
// [替換作品集照片]
// 請在下方的 projects 陣列中，將每個 image 屬性的網址換成你的作品截圖。
// 建議圖片比例為 4:5 (直向) 效果最佳。
// ========================================================================

const projects: Project[] = [
  {
    id: '1',
    title: 'WhatThe髮',
    category: '專題競賽',
    // ↓ 請換這裡的圖片網址 ↓
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    description: '系上專題作品，榮獲競賽佳獎。整合線上預約、DeepFake髮型模擬與設計師媒合的創新美髮平台。',
    actionType: 'modal',
    modalDetails: {
        longDescription: `《WhatThe髮》為我的大學畢業專題，我觀察到美業缺乏一個整合式APP讓顧客可以有黏著度，為此選題並開發此項目。
        
        整合線上預約、DeepFake髮型模擬與設計師媒合的功能型美業平台。

我在專題中負責系統架構、前端設計開發以及資料庫整合。
此專題最終在競賽中獲取佳作，也因此代表系上參與聯展。`,
        youtubeUrl: 'https://youtu.be/tTt8dGh35SI',
        awardUrl: 'https://www.im.tku.edu.tw/%e6%b7%a1%e6%b1%9f%e5%a4%a7%e5%ad%b8113%e5%ad%b8%e5%b9%b4%e5%ba%a6%e8%b3%87%e8%a8%8a%e7%ae%a1%e7%90%86%e5%ad%b8%e7%b3%bb_%e7%b3%bb%e5%85%a7%e5%b0%88%e9%a1%8c%e7%ab%b6%e8%b3%bd%e6%b1%ba%e8%b3%bd/'
    }
  },
  {
    id: '2',
    title: '街舞比賽籌辦',
    category: '活動組織',
    // ↓ 請換這裡的圖片網址 ↓
    image: 'https://i.postimg.cc/W3kTDwwm/6a785c7c-809a-40d6-90ac-d4d367c79955.png',
    description: '自主籌辦校園街舞比賽，成功洽談 Red Bull 與校方贊助，統籌百人規模活動，展現組織執行力。',
    actionType: 'modal',
    modalDetails: {
        socialLinks: [
            { platform: 'Instagram', url: 'https://www.instagram.com/hold_egg?igsh=dWw5MGg5YTQ5bHRw' },
            { platform: 'Youtube', url: 'https://www.youtube.com/@robby2587' }
        ]
    }
  },
  {
    id: '3',
    title: 'FinTrack APP',
    category: '全端開發',
    // ↓ 請換這裡的圖片網址 ↓
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop',
    description: '結合日常記帳與即時股票追蹤的個人化 APP。串接金融 API，以直覺的 UI/UX 打造流暢的理財體驗。',
    actionType: 'link',
    link: 'https://github.com/DINOHO222/Fintrack.git'
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.actionType === 'link' && project.link) {
        window.open(project.link, '_blank', 'noopener,noreferrer');
    } else if (project.actionType === 'modal') {
        setSelectedProject(project);
    }
  };

  return (
    <div className="bg-chic-black text-chic-white py-24">
      {selectedProject && (
        <PortfolioModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-chic-white/20 pb-8">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">Selected<br/><span className="text-chic-orange">Works</span></h2>
            <p className="text-right text-gray-400 mt-4 md:mt-0 max-w-xs font-light">
                專題競賽 • 活動企劃 • 前端開發<br/>精選作品
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
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-chic-orange/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
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