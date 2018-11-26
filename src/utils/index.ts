import * as request from 'request-promise-native';
import { config } from '../config';

export class Request {
  options: any;
  constructor(options: object) {
    this.options = options;
  }
  async send() {
    const options = Object.assign({
      jar: true,
      gzip: true,
      forever: true,
      timeout: 1000 * 60,
    }, this.options.request, {
      // 用于返回 buffer 对响应数据进行自定义数据编码
      encoding: 'utf-8',
      // 用于使 Promise 返回 response 结果
      resolveWithFullResponse: true,
      auth: { bearer: config.cocToken },
      headers: Object.assign({
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip,deflate,sdch',
        'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36',
      }, this.options.request.headers),
    });
    let response: any = {};
    try {
      response = await request(options);
    } catch (e) {
      throw new Error(`访问（${this.options.request.uri}）失败： ${e.name}  --  ${e.error.toString()}`);
    }
    return response.body;
  }
}