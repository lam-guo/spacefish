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
}
