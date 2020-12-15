import { CommentEntity } from './comment';

export class PostEntity {
  title: string;
  slug: string;
  excerpt: string;
  featureImage: string;
  content: string;
  comments: CommentEntity[];
}
