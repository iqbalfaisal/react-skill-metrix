import React, { FC } from 'react';

interface PageHeaderProps {
  children?: React.ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold p-4 shadow-sm sticky top-0 z-10 bg-white">
      {children}
    </h1>
  );
};
