import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentEntity } from './entities/comment';
import { PostEntity } from './entities/post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiTags('Posts')
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':slug')
  @ApiTags('Posts')
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  findOne(@Param('slug') slug: string): PostEntity {
    return this.postsService.findOne(slug);
  }

  @Get(':slug/comments')
  @ApiTags('Comments')
  @ApiResponse({ status: HttpStatus.OK, description: 'success' })
  findComments(@Param('slug') slug: string): string {
    return this.postsService.findComments(slug);
  }

  @Post(':slug/comments')
  @ApiTags('Comments')
  @ApiResponse({ status: HttpStatus.CREATED, description: 'success' })
  createComment(
    @Param('slug') slug: string,
    @Body('comment') comment: CommentEntity,
  ): string {
    return this.postsService.createComment(slug, comment);
  }
}
