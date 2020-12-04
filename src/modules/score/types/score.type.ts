import { IsNumber } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Participants } from '../../../constants/common';

/**
 * Score Type.
 */
export class ScoreType {
  /**
   * Constructor.
   * @param data - data
   */
  constructor(data?: Partial<ScoreType>) {
    if (data) {
      Object.assign(this, plainToClass(ScoreType, data));
    }
  }

  /**
   * User score.
   */
  @IsNumber()
  @ApiProperty({
    description: 'user score',
    example: 23,
  })
  public [Participants.user]: number;

  /**
   * Computer opponent score.
   */
  @IsNumber()
  @ApiProperty({
    description: 'Opponent score',
    example: 26,
  })
  public [Participants.opponent]: number;

  /**
   * Draws score.
   */
  @IsNumber()
  @ApiProperty({
    description: 'Number of draws',
    example: 26,
  })
  public draws: number;
}
