export type Skill = {
  name: string;
  type: SkillRole;
  level: string;
};

export type SkillRole = 'language' | 'framework' | 'library' | 'tool';
