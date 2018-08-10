export default function axiosAdapter(config) {
  return new Promise((resolve, reject) => {
    config.success = (res) => {
      resolve(res)
    }
    config.fail = (res) => {
      reject(res)
    }
    wx.request(config)
  })
}
