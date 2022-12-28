import React, { FC } from 'react';

interface UserCardProps {
  name: string;
}

export const UserCard: FC<UserCardProps> = ({ name }) => {
  return <h1 className="text-sm font-bold p-4 shadow-sm bg-white">{name}</h1>;
};
