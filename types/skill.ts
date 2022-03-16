export type Skill = {
  name: string;
  type: Type;
  level: string;
};

export type Type = 'language' | 'framework' | 'library' | 'tool';
