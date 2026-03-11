import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    skeletonClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    skeletonClassName = '',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' } // Load slightly before it comes into view
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={`relative overflow-hidden w-full h-full ${skeletonClassName}`} ref={imgRef as React.RefObject<HTMLDivElement>}>
            {/* Skeleton / Placeholder */}
            {/* The background was too flashy for modals, reduced to transparent with just pulse effect */}
            <div
                className={`absolute inset-0 bg-transparent animate-pulse transition-opacity duration-500 z-0 flex items-center justify-center ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            />

            {/* Actual Image */}
            {inView && (
                <img
                    src={src}
                    alt={alt}
                    className={`relative z-10 transition-opacity duration-500 object-contain w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                    onLoad={() => setIsLoaded(true)}
                    {...props}
                />
            )}
        </div>
    );
};

export default LazyImage;
