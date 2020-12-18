import React from 'react';

interface PostBodyPorps {
  title: string;
  excerpt?: string;
  content?: string;
}

export const PostBody = ({ title, excerpt, content }: PostBodyPorps) => {
  return (
    <>
      <h1 className="text-3xl tracking-wide row-start-3 md:text-5xl font-bold mt-8 mb-4 col-start-1 col-span-6 md:col-start-2 md:col-span-8 md:mt-12 md:mb-6">
        {title}
      </h1>

      {excerpt && (
        <div className="text-base py-4 col-start-1 col-span-6 border-t border-b border-gray-200 md:col-start-2 md:col-span-8 italic">
          {excerpt}
        </div>
      )}
      {content && <p className="text-base py-4 col-start-1 col-span-6 md:col-start-2 md:col-span-8">{content}</p>}
    </>
  );
};
