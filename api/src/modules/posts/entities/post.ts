import { ApiProperty } from '@nestjs/swagger';
import { CommentEntity } from './comment';

export class PostEntity {
  @ApiProperty({
    type: String,
    description: 'The posts title',
    example: 'My awesome blog post',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'The posts unique slug',
    example: 'A short description what the articel is about',
  })
  slug: string;

  @ApiProperty({
    type: String,
    description: 'An excerpt for the post',
    example: 'A short description what the articel is about',
    required: false,
  })
  excerpt?: string;

  @ApiProperty({
    type: String,
    description: 'The feature images URL',
    example: 'https://source.unsplash.com/random/',
    required: false,
  })
  featureImage: string;

  @ApiProperty({
    type: String,
    description: 'The actual blog post',
    example: 'Once upon a time...',
    required: false,
  })
  content: string;

  @ApiProperty({
    type: String,
    description: 'The blog posts comments',
    example: [],
    required: false,
  })
  comments: CommentEntity[];
}
