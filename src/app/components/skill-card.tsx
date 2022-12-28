import React, { FC } from 'react';

interface SkillCardProps {
  name: string;
}

export const SkillCard: FC<SkillCardProps> = ({ name }) => {
  const color = parseInt(name) > 6 ? 'bg-green-500' : 'bg-blue-300';
  return <h1 className={`text-sm font-bold p-4 shadow-sm ${color}`}>{name}</h1>;
};
