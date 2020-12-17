import React, { FunctionComponent } from 'react';

const PageContainer: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 bg-gray-50">
      <main className="max-w-full ">{children}</main>
    </div>
  );
};

export default PageContainer;
