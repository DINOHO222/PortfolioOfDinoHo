// 全站共用的個人資訊與文案設定檔

export const profileData = {
    name: "Dino Ho",
    role: "Frontend / UI/UX",
    currentYear: new Date().getFullYear(),

    // 聯絡方式
    contact: {
        phone: "0976-833-356",
        email: "dinothefresno@gmail.com",
        github: "DINOHO222",
        githubUrl: "https://github.com/DINOHO222"
    },

    // 關於我 (About Section)
    about: {
        heading: {
            line1: "Combining",
            highlight: "Technology",
            line2: "& Aesthetics."
        },
        quote: "我是一個對美感和技術都充滿熱情的人\n相信好的設計能夠改善人們的使用體驗",
        paragraphs: [
            "我是DINO，我熱愛跳舞，享受在律動中表達自我的感受，這培養了我對美感的敏銳度和追求完美的態度。無論是跳舞，還是使用介面的視覺美感，我都追求那份與人息息相關的美好體驗。",
            "平時愛好研究 3C 產品和前端設計開發，尤其是 UI/UX 設計領域。我喜歡打造美觀且有溫度的介面。在學習和實作方面，我具備高度執行力。這份對美的執著和實作的熱忱，讓我希望在資訊管理領域中，結合技術與美學，創造更有價值的數位體驗。"
        ],
        traits: [
            { label: 'Role', val: 'Frontend / UI/UX' },
            { label: 'Passion', val: 'Street Dance / Tech' },
            { label: 'Vibe', val: 'Self-Starter / Detail-Oriented' },
            { label: 'Collaboration', val: 'Communicative / Open-Minded' },
        ]
    }
};
