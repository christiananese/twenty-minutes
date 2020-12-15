import { PostEntity } from './entities/post';
import * as faker from 'faker';

export const createRandomPost = (count: number): PostEntity[] => {
  const posts: PostEntity[] = [];

  for (let i = 0; i < count; i++) {
    const post = new PostEntity();
    post.title = faker.random.words(3);
    post.featureImage = `https://source.unsplash.com/random/800x600?sig=${i}`;
    post.excerpt = faker.random.words(9);
    post.content = faker.lorem.text();

    posts.push(post);
  }
  return posts;
};
