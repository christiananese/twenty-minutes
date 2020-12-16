import { ApiProperty } from '@nestjs/swagger';

export class CommentEntity {
  @ApiProperty({
    type: String,
    description: 'The name of the comments author',
    example: 'John Doe',
    nullable: true,
    required: false,
  })
  name?: string;

  @ApiProperty({
    type: String,
    description: 'The actual comment',
    example: 'Loved your post. Keep up the good work.',
    nullable: false,
  })
  text: string;
}
