import React, { FC } from 'react';

interface PageHeaderProps {
  children?: React.ReactNode;
}

export const PageContainer: FC<PageHeaderProps> = ({ children }) => {
  return <div className="p-4 bg-gray-50 min-h-screen">{children}</div>;
};
