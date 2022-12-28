import { random, randomUserName } from 'app/utils';

export interface UserSkill {
  skill_id: string;
  level: number;
}

export interface User {
  id: string;
  name: string;
  skills: UserSkill[];
}

export const getUsers = () =>
  ((): User[] => {
    return new Array(10).fill(0).map((_, index) => {
      return {
        id: `${index}`,
        name: randomUserName(index),
        skills: new Array(random(0, 5)).fill(0).map((_, index) => {
          return {
            skill_id: `${index}`,
            level: random(1, 9),
          };
        }),
      };
    });
  })();
