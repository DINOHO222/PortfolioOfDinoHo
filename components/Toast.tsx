import React from 'react';
import { useToast, ToastType } from '../hooks/useToast';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastConfig: Record<ToastType, { icon: React.ReactNode; bgClass: string; textClass: string }> = {
    success: {
        icon: <CheckCircle2 className="w-5 h-5" />,
        bgClass: 'bg-chic-black border-chic-black',
        textClass: 'text-white',
    },
    error: {
        icon: <AlertCircle className="w-5 h-5" />,
        bgClass: 'bg-[#FF0000] border-[#FF0000]',
        textClass: 'text-white',
    },
    info: {
        icon: <Info className="w-5 h-5" />,
        bgClass: 'bg-chic-orange border-chic-orange',
        textClass: 'text-chic-black',
    },
};

const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
            {toasts.map((toast) => {
                const config = ToastConfig[toast.type];

                return (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-3 p-4 border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] animate-slide-up-fade pointer-events-auto min-w-[280px] max-w-sm ${config.bgClass} ${config.textClass}`}
                    >
                        <div className="shrink-0">{config.icon}</div>
                        <p className="flex-1 font-bold text-sm">{toast.message}</p>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="shrink-0 hover:opacity-70 transition-opacity"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ToastContainer;
