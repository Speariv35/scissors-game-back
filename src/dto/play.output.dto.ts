import { IsEnum, IsObject, ValidateNested } from 'class-validator';
import { plainToClass, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { GameAvailableOptions, Participants } from '../constants/common';
import { ScoreType } from '../modules/score/types/score.type';

/**
 * Play route data dto.
 */
export class PlayOutputDto {
  /**
   * Constructor.
   *
   * @param data - data
   */
  constructor(data?: Partial<PlayOutputDto>) {
    if (data) {
      Object.assign(this, plainToClass(PlayOutputDto, data));
    }
  }

  /**
   * User selected figure .
   */
  @IsEnum(GameAvailableOptions)
  @ApiProperty({
    description: 'Figure that user choose',
    enum: Object.values(GameAvailableOptions),
    example: GameAvailableOptions.scissors,
  })
  public readonly userChoice: GameAvailableOptions;

  /**
   * Computer Generated figure.
   */
  @IsEnum(GameAvailableOptions)
  @ApiProperty({
    description: 'Computer opponent choice',
    enum: Object.values(GameAvailableOptions),
    example: GameAvailableOptions.scissors,
  })
  public readonly opponentChoice: GameAvailableOptions;

  /**
   * Game score.
   */
  @IsObject()
  @ValidateNested()
  @ApiProperty({
    description: 'Current score of the game',
    type: ScoreType,
    example: { user: 23, opponent: 33 },
  })
  @Type(() => ScoreType)
  public score: ScoreType;

  /**
   * Winner of the round.
   */
  @IsEnum(Participants)
  @ApiProperty({
    description: 'Winner of the round',
    enum: Object.values(Participants),
    example: Participants.user,
  })
  public readonly winner: Participants | null;
}
