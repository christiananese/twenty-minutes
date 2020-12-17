import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @ApiPropertyOptional({
    type: 'string',
    format: 'uuid',
    example: '84fa1623-b262-4a88-ba68-4e978798dc66',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-12-17T06:20:32.232Z',
  })
  createdAt?: Date;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-12-17T06:20:32.232Z',
  })
  updatedAt?: Date;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    example: '2020-12-17T06:20:32.232Z',
  })
  deletedAt?: Date = null;

  deleted?: boolean = false;
}
