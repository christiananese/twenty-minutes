import Link from 'next/link';

export const PostBackLink = () => {
  return (
    <div className="text-lg font-bold tracking-wider col-start-1 col-span-6 py-4 row-start-1 md:col-start-2 md:col-span-11">
      <Link href="/">Zurück</Link>
    </div>
  );
};
