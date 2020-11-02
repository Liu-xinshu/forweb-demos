import axios from 'axios';

const request = axios.create({
	baseURL:"",
	// timeout: 3000
})


request.interceptors.request.use((config) => {
	return { ...config
	}
}, (err) => Promise.reject(err))


request.interceptors.response.use((res) => {
	// console.log(res, "响应拦截 ！！！")
	return res.data;
}, (err) => Promise.reject(err))
export default request;
