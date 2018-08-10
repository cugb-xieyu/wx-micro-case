
export default function defaultInterceptors(axiosCase) {
  axiosCase.interceptors.request.use(request => {
    return request
  })
  axiosCase.interceptors.response.use(response => {
    return response
  })
}
