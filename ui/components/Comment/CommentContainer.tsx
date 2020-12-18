import React, { FunctionComponent } from 'react';

export const CommentContainer: FunctionComponent = ({ children }) => {
  return <div className="flex flex-col col-start-1 col-span-6 md:col-start-2 md:col-span-8">{children}</div>;
};
