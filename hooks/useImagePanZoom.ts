import React, { useState, useRef, useCallback, useEffect } from 'react';

export const useImagePanZoom = (viewerImageUrl: string | null) => {
    const [zoomScale, setZoomScale] = useState(1);
    const panRef = useRef({ x: 0, y: 0 }); // Current pan position
    const dragStartRef = useRef({ x: 0, y: 0 }); // Origin of the drag stroke
    const isDraggingRef = useRef(false);
    const imageRef = useRef<HTMLImageElement>(null);

    // Helper to directly apply transform without triggering React re-renders for every mouse move
    const updateTransform = useCallback(() => {
        if (imageRef.current) {
            // Adjust translation based on scale to keep it consistent regardless of zoom level
            const currentScale = zoomScale;
            imageRef.current.style.transform = `scale(${currentScale}) translate(${panRef.current.x / currentScale}px, ${panRef.current.y / currentScale}px)`;
        }
    }, [zoomScale]);

    // Sync transform when zoom scale or image URL changes
    useEffect(() => {
        updateTransform();
    }, [zoomScale, viewerImageUrl, updateTransform]);

    // Reset zoom and pan when viewing a new image
    useEffect(() => {
        if (viewerImageUrl) {
            setZoomScale(1);
            panRef.current = { x: 0, y: 0 };
            if (imageRef.current) {
                imageRef.current.style.transform = 'scale(1) translate(0px, 0px)';
            }
        }
    }, [viewerImageUrl]);


    const zoomIn = useCallback(() => {
        setZoomScale((prev) => Math.min(prev + 0.5, 3));
    }, []);

    const zoomOut = useCallback(() => {
        setZoomScale((prev) => Math.max(prev - 0.5, 0.5));
    }, []);

    // Handle Drag logic
    const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault(); // Prevent default image dragging behavior
        isDraggingRef.current = true;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        dragStartRef.current = {
            x: clientX - panRef.current.x,
            y: clientY - panRef.current.y
        };

        if (imageRef.current) {
            imageRef.current.style.transition = 'none'; // Disable transition during drag for smoothness
            imageRef.current.classList.replace('cursor-grab', 'cursor-grabbing');
        }
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (!isDraggingRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        panRef.current = {
            x: clientX - dragStartRef.current.x,
            y: clientY - dragStartRef.current.y
        };

        // Request animation frame for buttery smooth updates
        requestAnimationFrame(updateTransform);
    }, [updateTransform]);

    const handleMouseUp = useCallback(() => {
        isDraggingRef.current = false;
        if (imageRef.current) {
            imageRef.current.style.transition = 'transform 0.1s ease-out'; // Re-enable smooth transition 
            imageRef.current.classList.replace('cursor-grabbing', 'cursor-grab');
        }
    }, []);

    return {
        imageRef,
        zoomScale,
        zoomIn,
        zoomOut,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    };
};
