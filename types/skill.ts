export type Skill = {
  name: string;
  type: Type;
  level: string;
};

type Type = 'language' | 'framework' | 'library' | 'tool';
