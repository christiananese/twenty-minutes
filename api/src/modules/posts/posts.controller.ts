import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostEntity } from './entities/post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug): PostEntity {
    return this.postsService.findOne(slug);
  }

  @Get(':slug/comments')
  findComments(@Param('slug') slug): string {
    return this.postsService.findComments(slug);
  }

  @Post(':slug/comments')
  createComment(@Param('slug') slug, @Body('comment') comment): string {
    return this.postsService.createComment(slug, comment);
  }
}
