import axios from 'axios'

const api = axios.create({baseURL: "/api"});

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      await axios.post('/api/auth/refresh')
      return api(error.config)
    }
    return Promise.reject(error)
  }
)

export default api;