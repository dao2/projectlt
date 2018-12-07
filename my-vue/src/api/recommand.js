import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

// ajax请求,不是jsonp请求了
export function getDiscList() {
  const url = '/api/getDiscList'
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
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}


// ajax请求,不是jsonp请求了1

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
    type: 'uid',
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