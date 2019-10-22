import axios        from 'axios';
import { message }  from 'antd';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://api_new.deeptechchina.com' : 'http://i.deeptechchina.com', // api的base_url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 修改请求数据
  transformRequest: [function (data, headers) {
      let ret = '';
      for (let it in data) {
          // 去除空字符串的请求字段
          // if (data[it] !== '') {
              if (ret !== '') ret += '&'
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
          // }
      }
      return ret
  }],
  timeout: 20000 // 请求超时时间
})

let timer

//拦截请求
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    // console.log('config', config)
    return config
  },
  error => {
    message.error('bed request')
    Promise.reject(error)
  }
)
//拦截响应
instance.interceptors.response.use(
  response => {
    if (response.data.code === 401 && response.data.message) message.warning(response.data.message)
    return response.data
  },
  err => {
    // 防抖：高频事件只能在一定时间内事件触发一次，一定时间内再次触发则重新计算时间；每次触发事件时都取消之前的延时调用方法
    // 节流：高频事件在规定的时间内只触发一次，多次触发无效 每次触发事件时都判断当前是否有等待执行的延时函数
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            message.error('错误请求')
            break
          case 401:
            localStorage.clear()
            message.error('登录信息过期或未授权，请重新登录！')
            break
          case 403:
            message.error('拒绝访问！')
            break
          case 404:
            message.error('请求错误,未找到该资源！')
            break
          case 500:
            message.err('服务器出问题了，请稍后再试！')
            break
          default:
            message.err(`连接错误 ${err.response.status}！`)
            break
        }
      } else {
        message.error('服务器出了点小问题，请稍后再试！')
      }
    }, 200) // 200 毫秒内重复报错则只提示一次！

    return Promise.reject(err)
  }
)

export default instance
