import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCommentDTO } from './dto/comment.dto';
import { CommentEntity } from './entities/comment';
import { PostEntity } from './entities/post';
import { PostsService } from './posts.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiTags('Posts')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all blog posts.',
    type: [PostEntity],
  })
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':slug')
  @ApiTags('Posts')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get single blog post.',
    type: PostEntity,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'not found' })
  @ApiParam({ name: 'slug', example: 'my-slug-1' })
  async findOne(@Param('slug') slug: string): Promise<PostEntity> {
    return this.postsService.findOne(slug);
  }

  @Get(':slug/comments')
  @ApiTags('Comments')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all comments for a blog post',
  })
  @ApiParam({ name: 'slug', example: 'my-slug-1' })
  async findComments(@Param('slug') slug: string): Promise<CommentEntity[]> {
    return this.postsService.findComments(slug);
  }

  @Post(':slug/comments')
  @ApiTags('Comments')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created new comment',
  })
  @ApiParam({ name: 'slug', example: 'my-slug-1' })
  async createComment(
    @Param('slug') slug: string,
    @Body() comment: CreateCommentDTO,
  ): Promise<CommentEntity> {
    return await this.postsService.createComment(slug, comment);
  }
}
