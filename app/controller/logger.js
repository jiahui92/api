'use strict';

const Controller = require('egg').Controller;

class Con extends Controller {

  async log() {
    const { ctx } = this;
    ctx.body = 'success';
    // ctx._timestamp = new Date().getTime();
    console.log(ctx.query);
  }
}

module.exports = Con;
