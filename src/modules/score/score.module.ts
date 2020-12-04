import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ScoreService],
  exports: [ScoreService],
})
export class ScoreModule {}
