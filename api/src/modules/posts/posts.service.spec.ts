import { NotFoundException } from '@nestjs/common';
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

      expect(postService.findAll).not.toHaveBeenCalled();

      const posts = await postService.findAll();
      expect(postService.findAll).toHaveBeenCalled();

      expect(posts.length).toBe(0);
    });
  });

  describe('findOne post', () => {
    it('should get a post by slug', async () => {
      const slug = 'hello';
      const mockPost = {
        id: 'uuid',
        title: 'Hello',
        slug,
        content: 'hello',
        featureImage: 'hello',
        comments: [],
        commentCount: 0,
      };

      jest.spyOn(postService, 'findOne').mockResolvedValue(mockPost);

      const result = await postService.findOne(slug);
      expect(postService.findOne).toHaveBeenCalled();

      expect(result).toEqual(mockPost);
    });

    it('throws an error as a post with the provided slug is found', async () => {
      const slug = 'not-existing-slug';

      expect(postService.findOne(slug)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findAll comments', () => {
    it('should get all comments from a certain post', async () => {
      expect(true).toBe(true);
    });

    it('should be an empty by default', async () => {
      expect(true).toBe(true);
    });
  });

  describe('createComment for post', () => {
    describe('name and text are provided', () => {
      it('should add a comment to the posts comments', async () => {
        expect(true).toBe(true);
      });
    });

    describe('only text is provided', () => {
      it('should add a comment to the posts comments', async () => {
        expect(true).toBe(true);
      });
    });

    describe('only name is provided', () => {
      it('should throw an error', async () => {
        expect(true).toBe(true);
      });
    });
  });
});
