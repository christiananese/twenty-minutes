import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDTO } from './dto/comment.dto';
import { CommentEntity } from './entities/comment';
import { PostEntity } from './entities/post';
import { createRandomPost } from './posts.seed';

/**
 * Helper function to simulate a DB filter by slug
 * @param postList the list of posts
 * @param slug the posts slug
 */
const findPostBySlug = (postList, slug) => {
  return postList.find((post) => {
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

  async findOne(slug: string): Promise<PostEntity> {
    const post = findPostBySlug(this.posts, slug);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async findComments(slug: string): Promise<CommentEntity[]> {
    const post = await this.findOne(slug);
    return post.comments;
  }

  async createComment(
    slug: string,
    commentData: CreateCommentDTO,
  ): Promise<CommentEntity> {
    const post = await this.findOne(slug);
    // create new comment with provided data
    const comment = new CommentEntity();
    comment.name = commentData.name;
    comment.text = commentData.text;
    post.comments.push(comment);
    // Normally we would "persist" the post to DB.
    return comment;
  }
}
