import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { AppService } from '../modules/app/app.service';
import { PlayOutputDto } from '../dto/play.output.dto';
import { PlayInputDto } from '../dto/play.input.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    type: PlayOutputDto,
  })
  @ApiBadRequestResponse()
  @Post(`/play`)
  public async play(@Body() body: PlayInputDto): Promise<PlayOutputDto> {
    return this.appService.play(body.userChoice);
  }
}
