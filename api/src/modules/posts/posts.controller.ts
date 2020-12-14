import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll(): string {
    return 'Return a list of blog posts';
  }

  @Get(':slug')
  findOne(@Param('slug') slug): string {
    return `Return a blog post by given slug ${slug}`;
  }

  @Get(':slug/comments')
  findComments(@Param('slug') slug): string {
    return `Return a all comments for post ${slug}`;
  }

  @Post(':slug/comments')
  createComment(@Param('slug') slug): string {
    return `Create a new commnet for post ${slug}`;
  }
}
