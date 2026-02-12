import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
            {/* Large Decorative Background Text */}
            <div className="absolute -left-4 top-20 md:-left-20 md:top-20 text-[20vw] font-black text-gray-200/40 leading-none select-none pointer-events-none writing-vertical-rl md:writing-horizontal-tb font-serif italic z-0 opacity-50 md:opacity-100">
                ABOUT
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start relative z-10">

                {/* Image Column */}
                <div className="w-full md:w-5/12 relative md:sticky md:top-32">
                    <FadeIn direction="right">
                        <div className="relative group cursor-none w-4/5 md:w-fit mx-auto md:mx-0" data-cursor="hover">
                            {/* Offset Frame Effect */}
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 w-full h-full border-2 border-chic-orange bg-transparent transition-transform duration-500 group-hover:top-2 group-hover:left-2 z-0"></div>
                            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full bg-chic-black transition-transform duration-500 group-hover:-top-2 group-hover:-left-2 z-0"></div>

                            {/* Main Image */}
                            <div className="relative z-10 border-2 border-chic-black bg-white p-2">
                                <img
                                    src="https://i.postimg.cc/Twz2Q43q/S-4833430-0.jpg"
                                    alt="Portrait"
                                    className="w-full h-auto grayscale contrast-125 brightness-110 object-cover aspect-[3/4]"
                                />

                                {/* Decorative Barcode-like element */}
                                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white/90 p-2 border border-chic-black flex flex-col items-center">
                                    <div className="h-6 md:h-8 w-16 md:w-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')] bg-[length:4px_100%]"></div>
                                    <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] mt-1">DINO.HO.2025</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Text Column */}
                <div className="w-full md:w-7/12 pt-4 md:pt-20">
                    <FadeIn delay={200}>
                        <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-10 leading-[0.9] tracking-tight uppercase text-center md:text-left">
                            Combining <br />
                            <span className="text-chic-orange font-serif italic font-normal normal-case">Technology</span> & <br />
                            Aesthetics.
                        </h2>
                    </FadeIn>

                    <div className="space-y-6 md:space-y-8">
                        <FadeIn delay={300}>
                            <p className="text-base md:text-xl leading-relaxed font-serif text-chic-black border-l-4 border-chic-orange pl-4 md:pl-6 font-medium">
                                我是一個對美感和技術都充滿熱情的人<br />
                                相信好的設計能夠改善人們的使用體驗
                            </p>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="text-gray-600 leading-loose text-justify space-y-4 md:space-y-6 text-sm md:text-base">
                                <p>
                                    我是DINO，我熱愛跳舞，享受在律動中表達自我的感受，這培養了我對美感的敏銳度和追求完美的態度。
                                    無論是跳舞，還是使用介面的視覺美感，我都追求那份與人息息相關的美好體驗。
                                </p>
                                <p>
                                    平時愛好研究 3C 產品和前端設計開發，尤其是 UI/UX 設計領域。我喜歡打造美觀且有溫度的介面。
                                    在學習和實作方面，我具備高度執行力。這份對美的執著和實作的熱忱，讓我希望在資訊管理領域中，結合技術與美學，創造更有價值的數位體驗。
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={500} className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mt-12 md:mt-16 border-t-2 border-chic-black pt-8 md:pt-12">
                        {[
                            { label: 'Role', val: 'Frontend / UI/UX' },
                            { label: 'Passion', val: 'Street Dance / Tech' },
                            { label: 'Vibe', val: 'Self-Starter / Detail-Oriented' },
                            { label: 'Collaboration', val: 'Communicative / Open-Minded' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <span className="absolute -left-3 top-2 w-2 h-2 bg-chic-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                <h4 className="font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-1 text-gray-400 group-hover:text-chic-black transition-colors">{item.label}</h4>
                                <p className="text-sm md:text-xl font-bold font-serif">{item.val}</p>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default About;
