import { Injectable } from '@nestjs/common';
import { Request } from '../utils';
import * as qs from 'querystring';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }

  async clans(query): Promise<object>{
    const request = new Request({request: {
      uri: `https://api.clashofclans.com/v1/clans?` + qs.stringify(query),
    }}); 
    return await request.send();
  }

  async getClanByTag(tag): Promise<object>{
    const request = new Request({request: {
      uri: `https://api.clashofclans.com/v1/clans/%23${tag}`,
    }}); 
    return await request.send();
  }

  async getClanMemByTag(tag): Promise<object>{
    const request = new Request({request: {
      uri: `https://api.clashofclans.com/v1/clans/%23${tag}/members`,
    }}); 
    return await request.send();
  }
}
