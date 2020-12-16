import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    postService = module.get<PostsService>(PostsService);
  });

  describe('findAll posts', () => {
    it('should create 20 dummy posts by default', () => {
      const posts = postService.findAll();
      expect(posts.length).toBe(20);
    });

    it('should get all posts', async () => {
      const posts = await postService.findAll();
      jest.spyOn(postService, 'findAll').mockImplementation(() => posts);
      expect(posts.length).toBe(20);
    });

    it('should return an empty array if there are no posts', async () => {
      jest.spyOn(postService, 'findAll').mockImplementation(() => []);
      const posts = await postService.findAll();
      expect(postService.findAll).toHaveBeenCalled();
      expect(posts.length).toBe(0);
    });
  });

  describe('findOne post', () => {
    it('should get a post by SLUG', async () => {
      expect(true).toBe(true);
    });

    it('throws an error as a post with the provided SLUG is found', async () => {
      expect(true).toBe(true);
    });
  });
});
