import { useQuery } from 'react-query';
import CommentAPI from '../api/comment';

/**
 * Custom hook to fetch a posts comments
 * @param slug, the posts slug
 * @param initialData preloaded comments
 */
export default function useComments(slug: string, initialData: any) {
  return useQuery(['comments', slug], async () => await CommentAPI.findAll(slug), {
    initialData
  });
}
