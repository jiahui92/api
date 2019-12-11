'use strict';

const Controller = require('egg').Controller;

class Con extends Controller {

  async getRecommendGroups() {
    const { ctx } = this;
    ctx.body = [{
      name: '宝藏测试小组',
      groups: ['638298', 'blabla', 'insidestory', 'buybook']
    }, {
      name: '北京',
      groups: ['625354', 'zhufang', 'beijingzufang', '26926']
    }, {
      name: '上海',
      groups: ['shanghaizufang', 'pudongzufang', 'homeatshanghai']
    }, {
      name: '广州',
      groups: ['gz_rent', 'gz020', 'tianhezufang']
    }, {
      name: '深圳',
      groups: ['szsh', '106955', '637628', 'nanshanzufang', 'futianzufang']
    }, {
      name: '杭州',
      groups: ['HZhome', '145219', '467221']
    }, {
      name: '成都',
      groups: ['CDzufang', 'hezu', '343477']
    }];
  }
}

module.exports = Con;
