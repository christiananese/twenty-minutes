import { Injectable } from '@nestjs/common';
import { CommentEntity } from './entities/comment';
import { PostEntity } from './entities/post';
import { createRandomPost } from './posts.seed';

/**
 * Helper function to simulate db filter by slug
 * @param postList the list of posts
 * @param slug the posts slug
 */
const findPostBySlug = (postList, slug) => {
  return postList.filter((post) => {
    return post.slug === slug;
  });
};

@Injectable()
export class PostsService {
  private readonly posts: PostEntity[] = [];

  constructor() {
    const posts = createRandomPost(20);
    this.posts.push(...posts);
  }

  findAll(): PostEntity[] {
    return this.posts;
  }

  findOne(slug: string): PostEntity {
    // 1. find post by given slug
    return findPostBySlug(this.posts, slug);
  }

  findComments(slug: string): string {
    // 1. find post by given slug
    // 2. return the posts comments
    return `Return a all comments for post ${slug}`;
  }

  createComment(slug: string, comment: CommentEntity): string {
    // 1. find post by given slug
    // 2. create new comment with provided data
    // 3. Push comment to ths posts comments
    // 4. "persist" post
    // 5. return post entity
    return `Create a new comment for post ${slug} with ${comment}`;
  }
}
