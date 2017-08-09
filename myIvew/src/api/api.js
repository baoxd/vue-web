import axios from 'axios'

let base = ''

export const getUserListPage = (params) => {
	console.log(params);
	return axios.get(`${base}/user/listpage`, {params: params})
}

export const removeUser = (params) => {
	return axios.get(`${base}/user/remove`, {params: params})
}

export const editUser = (params) => {
	return axios.get(`${base}/user/edit`, {params: params})
}

export const addUser = (params) => {
	return axios.get(`${base/user/add}`, {params: params})
}