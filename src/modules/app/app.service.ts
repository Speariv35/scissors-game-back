import { Injectable } from '@nestjs/common';
import { HelperService } from '../helper/helper.service';
import { ScoreService } from '../score/score.service';
import { GameAvailableOptions } from '../../constants/common';
import { PlayOutputDto } from '../../dto/play.output.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly helpers: HelperService,
    private readonly scoreService: ScoreService,
  ) {}
  /**
   * Play route receives user figure and return score and winners;
   *
   * @param userChoice - user chosen figure
   */
  public async play(userChoice: GameAvailableOptions): Promise<PlayOutputDto> {
    const generatedOption = await this.helpers.generateOption();
    const winner = this.helpers.defineWinner(userChoice, generatedOption);
    const score = this.scoreService.changeScore(winner);
    return {
      userChoice,
      opponentChoice: generatedOption,
      winner,
      score,
    };
  }
}
