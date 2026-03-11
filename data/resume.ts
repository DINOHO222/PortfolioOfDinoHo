export type TabType = 'experience' | 'education' | 'achievements';

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
}

export interface EducationItem {
    degree: string;
    school: string;
    year: string;
}

export interface AchievementItem {
    role: string;
    name: string;
    period: string;
    desc: string;
}

export const experiences: ExperienceItem[] = [
    {
        role: "街舞比賽主辦人",
        company: "淡江大學&輔仁大學 兩校合辦",
        period: "大學期間",
        desc: "成功獲得校方和紅牛 (Red Bull) 的贊助支持。此經驗不僅訓練了組織協調能力，也展現將想法付諸實現的決心。"
    },
    {
        role: "資訊展覽代表",
        company: "淡江大學資管系",
        period: "大學期間",
        desc: "代表系上參與資訊展覽，負責解說與展示，展現溝通與表達能力。"
    },
    {
        role: "SideProject",
        company: "FinTrackAPP & 個人網站",
        period: "2025",
        desc: "獨立開發個人介紹網站&記帳APP，應用前端技術於實際專案中。"
    }
];

export const education: EducationItem[] = [
    {
        degree: "資訊管理系 學士",
        school: "淡江大學",
        year: "2021/9 - 2025/6"
    }
];

export const achievements: AchievementItem[] = [
    {
        role: "競賽佳獎",
        name: "專題 WhatThe髮",
        period: "大學期間",
        desc: "參與系上專題競賽獲得佳獎肯定。"
    },
    {
        role: "語言證照",
        name: "多益英語能力檢定 (TOEIC)",
        period: "720 分",
        desc: "具備良好的英語閱讀與溝通能力。"
    },
    {
        role: "專業證照",
        name: "TQC Excel",
        period: "專業級",
        desc: "具備專業的試算表處理與數據分析能力。"
    }
];
