
import axios from 'axios'
import adapter from '../adapter'
import interceptor from '../interceptor'
import apiConfig from '@/api-config'

let http = axios.create({
  baseURL: apiConfig.apiAddress,
  adapter: adapter
})
http.defaults.headers.post['Content-Type'] = 'application/json'

interceptor(http)

export const demoApi = {
  fetchDemoData: data => http({method: 'POST', url: 'api/demointerface', data})
}
