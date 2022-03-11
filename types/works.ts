export type Works = {
  name: string;
  img: string;
  role: Role[];
  github?: string;
  slide?: string;
  otherUrl?: string;
  introduction: string;
};

type Role = 'Frontend' | 'Backend' | 'Design' | 'PM';
