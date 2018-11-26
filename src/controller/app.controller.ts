import { Get, Controller, Query, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/')
  root(): string {
    return this.appService.root();
  }
  @Get('/api/clans')
  async clans(@Query() query) {
    const items = ['name', 'warFrequency', 'minMembers', 'locationId', 'maxMembers', 'minClanPoints', 'minClanLevel', 'limit'];
    Object.keys(query).map(v => {
      if (items.indexOf(v) == -1) throw new HttpException('不存在的参数', HttpStatus.FORBIDDEN);
    })
    return this.appService.clans(query);
  }
}
