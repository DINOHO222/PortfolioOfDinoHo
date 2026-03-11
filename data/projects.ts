import { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'WhatThe髮',
        category: '專題競賽',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
        description: '系上專題作品，榮獲競賽佳獎。整合線上預約、DeepFake髮型模擬與設計師媒合的創新美髮平台。',
        actionType: 'modal',
        modalDetails: {
            longDescription: `《WhatThe髮》為我的大學畢業專題，我觀察到美業缺乏一個整合式APP讓顧客可以有黏著度，為此選題並開發此項目。\n        \n        整合線上預約、DeepFake髮型模擬與設計師媒合的功能型美業平台。\n\n我在專題中負責系統架構、前端設計開發以及資料庫整合。\n此專題最終在競賽中獲取佳作，也因此代表系上參與聯展。`,
            youtubeUrl: 'https://youtu.be/tTt8dGh35SI',
            awardUrl: 'https://www.im.tku.edu.tw/%e6%b7%a1%e6%b1%9f%e5%a4%a7%e5%ad%b8113%e5%ad%b8%e5%b9%b4%e5%ba%a6%e8%b3%87%e8%a8%8a%e7%ae%a1%e7%90%86%e5%ad%b8%e7%b3%bb_%e7%b3%bb%e5%85%a7%e5%b0%88%e9%a1%8c%e7%ab%b6%e8%b3%bd%e6%b1%ba%e8%b3%bd/',
            featureImages: [
                { title: '產品架構圖 (IA)', url: 'https://i.postimg.cc/Qx71yMkj/Untitled.png' },
                { title: '核心流程 AI模擬髮型', url: 'https://i.postimg.cc/7YzWD0yv/Untitled-(1).png' },
                { title: '核心流程 預約功能', url: 'https://i.postimg.cc/cCRwksPP/Untitled-(2).png' },
                { title: '關鍵功能需求表', url: 'https://i.postimg.cc/BvjD95d6/Untitled-(3).png' }
            ]
        }
    },
    {
        id: '2',
        title: '街舞比賽籌辦',
        category: '活動組織',
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
        title: 'WherePain APP',
        category: '全端開發',
        image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop',
        description: '分析人體疼痛部位，給出初診建議。串接Gemini API，以直覺的 UI/UX 打造流暢的體驗。',
        actionType: 'modal',
        modalDetails: {
            longDescription: '這是一款分析人體疼痛部位並給出初診建議的全端 Web App。\n\n我們串接了 Gemini API，透過直覺的圖形化介面讓使用者點選疼痛位置，並結合 AI 分析給出初步的醫療建議。期望利用現代生成式 AI 的力量，打造出能帶來流暢體驗的醫療輔助工具。',
            githubUrl: 'https://github.com/DINOHO222/WherePain.git',
            webAppUrl: 'https://where-pain.vercel.app/'
        }
    }
];
