import { useState, useCallback } from 'react';
import { Project } from '../types';

export const usePortfolioModal = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = useCallback((project: Project) => {
        if (project.actionType === 'link' && project.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        } else if (project.actionType === 'modal') {
            setSelectedProject(project);
        }
    }, []);

    const closeModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    return {
        selectedProject,
        handleProjectClick,
        closeModal
    };
};
