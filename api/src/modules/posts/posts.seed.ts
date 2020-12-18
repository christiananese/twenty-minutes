import { PostEntity } from './entities/post';
import * as faker from 'faker';
import { CommentEntity } from './entities/comment';
import { v4 as uuid } from 'uuid';

export const createRandomPost = (count: number): PostEntity[] => {
  const posts: PostEntity[] = [];

  for (let i = 0; i < count; i++) {
    const post = new PostEntity();
    post.id = uuid();
    post.title = faker.random.words(3);
    post.slug = `my-slug-${i}`;
    // just add the signature query-parameter in order to get actual different images
    post.featureImage = `https://source.unsplash.com/random/900x600?sig=${i}`;

    post.excerpt = faker.random.words(9);
    post.content = faker.lorem.paragraphs(5);

    // an article every 12 days
    const timeStamp = new Date(+new Date() - i * 1000000000);

    post.createdAt = timeStamp;
    post.updatedAt = timeStamp;

    // add randomly 0 to 20 comments to each blog post
    const commentCount = Math.floor(Math.random() * 21);
    const comments: CommentEntity[] = [];

    for (let j = 0; j < commentCount; j++) {
      const comment = new CommentEntity();
      comment.id = uuid();
      comment.name = faker.name.firstName();
      comment.text = faker.lorem.text();
      // every hour a new comment
      const t = new Date(+timeStamp + (commentCount - j) * 3600000);

      comment.createdAt = t;
      comment.updatedAt = t;

      comments.push(comment);
    }

    post.comments = comments;
    post.commentCount = comments.length;

    posts.push(post);
  }
  return posts;
};
