import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDTO {
  @ApiProperty({
    type: String,
    description: 'The name of the comments author',
    example: 'John Doe',
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    type: String,
    description: 'The actual comment',
    example: 'Loved your post. Keep up the good work.',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  text!: string;
}
