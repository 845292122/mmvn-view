import axios from 'axios'

// TODO axios封装完善
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (req) => {
    // TODO 如果存在token,将token放在请求头中
    return req
  },
  (err) => {
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (resp) => {
    // TODO 响应处理
  },
  (err) => {
    // TODO 响应异常处理
  }
)
