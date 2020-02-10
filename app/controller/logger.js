'use strict';

const Controller = require('egg').Controller;

class Con extends Controller {

  async log() {
    const { ctx } = this;
    ctx.body = 'success';
    ctx.query._timestamp = new Date().getTime();
    ctx.query._timestr = new Date().toString();
    ctx.logger.info(JSON.stringify(ctx.query));
  }
}

module.exports = Con;
