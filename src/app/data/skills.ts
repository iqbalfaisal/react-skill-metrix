import { random, randomSkillCategoryName, randomSkillName } from 'app/utils';

export interface SkillCategory {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  category_id: string;
}

export const getSkillCategories = () =>
  ((): SkillCategory[] => {
    return new Array(10)
      .fill(0)
      .map((_, index) => {
        return {
          id: `${index}`,
          name: randomSkillCategoryName(index),
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  })() as SkillCategory[];

export const getSkills = () =>
  ((): Skill[] => {
    return new Array(10)
      .fill(0)
      .map((_, index) => {
        return {
          id: `${index}`,
          name: randomSkillName(index),
          category_id: `${random(0, 9)}`,
        };
      })
      .sort((a, b) => a.id.localeCompare(b.id));
  })() as Skill[];
