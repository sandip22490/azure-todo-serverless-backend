import { decode } from 'jsonwebtoken';

export default class RequestParser {
  constructor(context, request) {
    this.context = context;
    this.request = request;
    this.init();
  }

  init() {
    console.log = this.context.log;
    console.info = this.context.log.info;
    console.warn = this.context.log.warn;
    console.error = this.context.log.error;
    this.decodedToken = this.decryptToken();
  }

  getHttpMethod() {
    return this.request.method;
  }

  getHeader(headerName = '') {
    if (headerName) {
      return this.request.headers[headerName];
    }
    return this.request.headers;
  }

  decryptToken() {
    const authorization = this.getHeader('authorization') || this.getHeader('Authorization');
    return authorization ? decode(authorization.split(' ')[1], { json: true }) : {};
  }

  getReqParam(paramName = '', toInt = false, toBool = false) {
    if (paramName) {
      if (toInt) {
        return parseInt(this.request.params[paramName], 10);
      }

      if (toBool) {
        return Boolean(this.request.params[paramName]);
      }

      return this.request.params[paramName];
    }
    return this.request.params;
  }

  getQueryParam(paramName = '', toInt = false, toBool = false) {
    if (paramName) {
      if (toInt) {
        return parseInt(this.request.query[paramName], 10);
      }

      if (toBool) {
        return Boolean(this.request.query[paramName]);
      }

      return this.request.query[paramName];
    }
    return this.request.query;
  }

  getReqPath() {
    return new URL(this.request.url).pathname;
  }

  getBody() {
    return this.request.body;
  }

  getSubId() {
    return this.decodedToken && this.decodedToken.sub;
  }

  getDefaultParams() {
    return {
      httpMethod: this.getHttpMethod(),
      reqPath: this.getReqPath(),
      subId: this.getSubId(),
    };
  }
}
