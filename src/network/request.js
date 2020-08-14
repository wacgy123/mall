import axios from 'axios'
import {jsonp} from 'common/js/jsonp'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://192.168.1.101:8081",
    timeout: 5000
  })

  //配置axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })
  instance.interceptors.response.use(res => {
    return res.data.data
  }, error => {
    console.log(error);
  })

  //发送网络请求
  return instance(config)
}


export function getHomeGoods(data) {
  return jsonp("https://list.mogu.com/search?cKey=15&fcid=50240", data)
}
//
// export function getGoodsDetail(data) {
//   return jsonp("https://api.mogu.com/h5/http.detail.api/1/", data)
// }
