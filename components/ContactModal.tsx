import React from 'react';
import { X, Mail, Github, Smartphone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-chic-black/60 backdrop-blur-sm p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-chic-white border-2 border-chic-black w-full max-w-md relative shadow-[12px_12px_0px_0px_rgba(255,79,0,1)] animate-modal-pop origin-center perspective-1000"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-chic-black text-white p-4 flex justify-between items-center relative overflow-hidden">
          {/* Decorative element in header */}
          <div className="absolute top-0 right-0 w-16 h-full bg-white/5 skew-x-12 -mr-4"></div>
          
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider animate-slide-up-fade [animation-delay:100ms] opacity-0">Contact Info</h3>
          <button 
            onClick={onClose}
            data-cursor="hover"
            className="hover:text-chic-orange transition-colors z-10 animate-slide-up-fade [animation-delay:150ms] opacity-0"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-5 md:gap-6">
          <p className="text-gray-600 font-serif italic text-base md:text-lg mb-2 animate-slide-up-fade [animation-delay:200ms] opacity-0">
            期待與您合作，歡迎隨時聯繫！
          </p>

          <div className="space-y-3 md:space-y-4">
            <a 
              href="tel:0976833356" 
              data-cursor="hover"
              className="flex items-center gap-4 p-3 md:p-4 border border-chic-black hover:bg-chic-black hover:text-white transition-all group animate-slide-up-fade [animation-delay:300ms] opacity-0 hover:translate-x-1 duration-200"
            >
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-chic-orange group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400">Phone</span>
                <span className="text-base md:text-lg font-bold font-mono">0976-833-356</span>
              </div>
            </a>

            <a 
              href="mailto:dinothefresno@gmail.com" 
              data-cursor="hover"
              className="flex items-center gap-4 p-3 md:p-4 border border-chic-black hover:bg-chic-black hover:text-white transition-all group animate-slide-up-fade [animation-delay:400ms] opacity-0 hover:translate-x-1 duration-200"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-chic-orange group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400">Email</span>
                <span className="text-base md:text-lg font-bold font-mono break-all">dinothefresno@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://github.com/DINOHO222" 
              target="_blank" 
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-4 p-3 md:p-4 border border-chic-black hover:bg-chic-black hover:text-white transition-all group animate-slide-up-fade [animation-delay:500ms] opacity-0 hover:translate-x-1 duration-200"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-chic-orange group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400">Github</span>
                <span className="text-base md:text-lg font-bold font-mono">@DinoHo</span>
              </div>
            </a>
          </div>

          <button 
            onClick={onClose}
            data-cursor="hover"
            className="mt-2 md:mt-4 w-full bg-chic-orange text-white py-3 font-bold uppercase hover:bg-chic-black transition-colors border border-chic-black animate-slide-up-fade [animation-delay:600ms] opacity-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;