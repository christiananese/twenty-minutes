import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PostEntity } from './entities/post';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postService: PostsService;
  const slug = 'my-slug';
  let mockPost: PostEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    postService = module.get<PostsService>(PostsService);
    mockPost = {
      id: 'uuid',
      title: 'Hello',
      slug,
      content: 'hello',
      featureImage: 'hello',
      comments: [],
      commentCount: 0,
    };
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
      const mockComment = {
        name: 'John Doe',
        text: 'A simple comment',
      };
      const mockPostWithComments = Object.assign({}, mockPost, {
        comments: [mockComment],
        commentCount: 1,
      });

      jest
        .spyOn(postService, 'findOne')
        .mockResolvedValue(mockPostWithComments);

      const comments = await postService.findComments(
        mockPostWithComments.slug,
      );

      expect(comments.length).toBe(1);
    });

    it('should be an empty by default', async () => {
      jest.spyOn(postService, 'findOne').mockResolvedValue(mockPost);

      const post = await postService.findOne(slug);

      expect(post.commentCount).toBe(0);
      expect(post.comments).toHaveLength;
    });
  });

  describe('createComment for post', () => {
    let postWithoutComments;

    beforeEach(async () => {
      jest.spyOn(postService, 'findOne').mockResolvedValue(mockPost);

      postWithoutComments = await postService.findOne(slug);
    });

    describe('name and text are provided', () => {
      it('should add a comment to the posts comments', async () => {
        const mockComment = {
          name: 'Max',
          text: 'Nice blog post',
        };

        expect(postWithoutComments.commentCount).toBe(0);
        await postService.createComment(postWithoutComments.slug, mockComment);
        expect(postWithoutComments.commentCount).toBe(1);
        const persistedComment = postWithoutComments.comments[0];
        expect(persistedComment).toMatchObject(mockComment);
      });
    });

    describe('only text is provided', () => {
      it('should add a comment to the posts comments', async () => {
        const mockComment = {
          text: 'Nice blog post',
        };

        expect(postWithoutComments.commentCount).toBe(0);
        await postService.createComment(postWithoutComments.slug, mockComment);
        expect(postWithoutComments.commentCount).toBe(1);
        const persistedComment = postWithoutComments.comments[0];
        expect(persistedComment).toMatchObject(mockComment);
      });
    });

    describe('only name is provided', () => {
      it('should throw an error', async () => {
        const mockEmptyComment = {
          name: 'Max',
          text: null,
        };
        const mockNullComment = {
          name: 'Max',
          text: null,
        };

        expect(postWithoutComments.commentCount).toBe(0);

        expect(
          postService.createComment(postWithoutComments.slug, mockEmptyComment),
        ).rejects.toThrow(UnprocessableEntityException);
        expect(
          postService.createComment(postWithoutComments.slug, mockNullComment),
        ).rejects.toThrow(UnprocessableEntityException);
      });
    });
  });
});
