import { Injectable } from '@nestjs/common';
import { ScoreType } from './types/score.type';
import { Participants } from '../../constants/common';

@Injectable()
export class ScoreService {
  /**
   * Stores game score - in real life we need to use database with appropriate repository module
   */
  private _score: ScoreType = {
    [Participants.user]: 0,
    [Participants.opponent]: 0,
    draws: 0,
  };

  /**
   * Change score of game and return updated score
   * @param winner - Winner of the round if no winner then its draw
   */
  public changeScore(winner): ScoreType {
    winner ? (this._score[winner] += 1) : (this._score.draws += 1);
    return this._score;
  }
}
