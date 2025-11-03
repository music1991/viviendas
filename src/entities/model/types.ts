export type Project = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  previewVideo: string;
  tags: string[];
  stack: string[];
  description: string;
  links: { repo?: string; live?: string };
  impact?: string[];
};
