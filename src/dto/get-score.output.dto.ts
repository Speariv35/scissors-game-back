import { IsObject, ValidateNested } from 'class-validator';
import { plainToClass, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ScoreType } from '../modules/score/types/score.type';

/**
 * Play route data dto.
 */
export class GetScoreOutputDto {
  /**
   * Constructor.
   *
   * @param data - data
   */
  constructor(data?: Partial<GetScoreOutputDto>) {
    if (data) {
      Object.assign(this, plainToClass(GetScoreOutputDto, data));
    }
  }
  /**
   * Game score.
   */
  @IsObject()
  @ValidateNested()
  @ApiProperty({
    description: 'Current score of the game',
    type: ScoreType,
    example: { user: 23, opponent: 33, draw: 22 },
  })
  @Type(() => ScoreType)
  public score: ScoreType;
}
