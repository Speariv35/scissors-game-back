import { IsEnum } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { GameAvailableOptions } from '../constants/common';

/**
 * Play route input data dto.
 */
export class PlayInputDto {
  /**
   * Constructor.
   *
   * @param data - data
   */
  constructor(data?: Partial<PlayInputDto>) {
    if (data) {
      Object.assign(this, plainToClass(PlayInputDto, data));
    }
  }

  /**
   * Play.
   */
  @IsEnum(GameAvailableOptions)
  @ApiProperty({
    description: 'Figure that user choose',
    enum: Object.values(GameAvailableOptions),
    example: GameAvailableOptions.scissors,
  })
  public readonly userChoice: GameAvailableOptions;
}
