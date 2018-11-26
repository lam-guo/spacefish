import { Get, Controller, Query, HttpException, HttpStatus, Param } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  root(): string {
    return this.appService.root();
  }

  @Get('/clans')
  async clans(@Query() query) {
    const items = ['name', 'warFrequency', 'minMembers', 'locationId', 'maxMembers', 'minClanPoints', 'minClanLevel', 'limit'];
    Object.keys(query).map(v => {
      if (items.indexOf(v) == -1) throw new HttpException('不存在的参数', HttpStatus.FORBIDDEN);
    })
    return await this.appService.clans(query);
  }

  @Get('/clans/tag/:tag')
  async getClanByTag(@Param() param) {
    const { tag } = param;
    if (!tag) throw new HttpException('tag不能为空', HttpStatus.FORBIDDEN);
    return await this.appService.getClanByTag(tag);
  }

  @Get('/clans/tag/:tag/members')
  async getClanMemByTag(@Param() param) {
    const { tag } = param;
    if (!tag) throw new HttpException('tag不能为空', HttpStatus.FORBIDDEN);
    return await this.appService.getClanMemByTag(tag);
  }
}
