export type Works = {
  name: string;
  image: {
    src: string;
  };
  role: Role[];
  github?: string;
  slide?: string;
  otherUrl?: string;
  introduction: string;
};

export type Role = 'Frontend' | 'Backend' | 'Design' | 'PM';
