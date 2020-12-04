import { Module } from '@nestjs/common';
import { HelperModule } from '../helper/helper.module';
import { ScoreModule } from '../score/score.module';
import { AppController } from '../../controllers/app.controller';
import { AppService } from './app.service';
import { HelperService } from '../helper/helper.service';
import { ScoreService } from '../score/score.service';

@Module({
  imports: [HelperModule, ScoreModule],
  controllers: [AppController],
  providers: [AppService, HelperService, ScoreService],
})
export class AppModule {}
