export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string; // For direct external link

  // New fields for Modal content
  actionType?: 'modal' | 'link';
  modalDetails?: {
    longDescription?: string; // For the story/journey
    youtubeUrl?: string;
    awardUrl?: string;
    githubUrl?: string;
    webAppUrl?: string;
    socialLinks?: {
      platform: 'Instagram' | 'Youtube';
      url: string;
    }[];
    featureImages?: {
      title: string;
      url: string;
    }[];
  };
}