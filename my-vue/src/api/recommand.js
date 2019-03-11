import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

const url = process.env.API_ROOT;
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
var qs=require('qs');
// ajax请求,不是jsonp请求了
export function getDiscList() {
  const url = '/api/getDiscList';
  // const url = '/v1/getByTag?tag=%E5%89%8D%E7%AB%AF&src=web&t=1';
  // https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg
  //  const url = 'https://zhihu-daily.leanapp.cn/api/v1/last-stories';
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  // var promise = new Promise(function(resolve,reject){});pomise.then()
  // getDiscList() = new Promise(function(resolve,reject){}); 所以可以getDiscList().then()

  // 一般情况下我们都会使用new Promise()来创建promise对象，但是我们也可以使用promise.resolve 和 promise.reject这两个方法；
  //
  // Promise.resolve(value)的返回值也是一个promise对象，我们可以对返回值进行.then调用；豆瓣这个请求接口就是这样如下代码：
  //
  // Promise.resolve(11).then(function(value){
  //   console.log(value); // 打印出11
  // });

  var instance = axios.create({
    headers: {
      // referer: 'https://c.y.qq.com/',
      // host:'c.y.qq.com'
    }
  });
  return axios.get(url,{
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
  // 注意看他返回的是一个promise douban这个promise这个是先做请求 然后请求做完之后再返回promise(Promise.resolve(value)的返回值也是一个promise)这样写更简单
  // 这里改写的是先声明promise 正确的事情放里面紧接着返回promise
  // return new Promise((resolve, reject) => {
  //   var instance = axios.create({
  //     headers: {'content-type': 'application/x-www-form-urlencoded'}
  //   });
  //   axios.get(url, {
  //     params: data
  //   }).then((res) => {
  //     resolve(res.data)
  //   })
  //
  // })
}


// ajax请求,不是jsonp请求了
export function douban1() {
  // https://api.douban.com/v2/book/search?q=javascript&alt=json&start=1&count=20
  const url = '/v2/book/search'
  const data = Object.assign({}, {
    q: 'javascript',
    alt: 'json',
    start: 1,
    count: 20,
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function douban() {

  const url = '/j/search_subjects'
  const data = Object.assign({}, {
    type: 'movie',
    tag: '热门',
    sort: 'recommend',
    page_limit: 20,
    page_start: 0,
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function weibo() {
  const url = '/api/container/getIndex'
  const data = Object.assign({}, {
    rightmod: 1,
    wvr: 6,
    mod: 'personnumber',
    is_all: 1,
    jumpfrom: 'weibocom',
    // type: uid,
    value: 5366309435,
    containerid: 1005055366309435,
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0