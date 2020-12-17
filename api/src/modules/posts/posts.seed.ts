import { PostEntity } from './entities/post';
import * as faker from 'faker';
import { CommentEntity } from './entities/comment';

export const createRandomPost = (count: number): PostEntity[] => {
  const posts: PostEntity[] = [];

  for (let i = 0; i < count; i++) {
    const post = new PostEntity();
    post.title = faker.random.words(3);
    post.slug = `my-slug-${i}`;
    // just add the signature query-parameter in order to get actual different images
    post.featureImage = `https://source.unsplash.com/random/900x600?sig=${i}`;

    post.excerpt = faker.random.words(9);
    post.content = faker.lorem.text();

    // add randomly 0 to 20 comments to each blog post
    const commentCount = Math.floor(Math.random() * 21);
    const comments: CommentEntity[] = [];

    for (let j = 0; j < commentCount; j++) {
      const comment = new CommentEntity();
      comment.name = faker.name.firstName();
      comment.text = faker.lorem.text();
      comments.push(comment);
    }

    post.comments = comments;
    post.commentCount = comments.length;

    posts.push(post);
  }
  return posts;
};
