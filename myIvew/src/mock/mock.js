import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Users } from './data/user'

let _Users = Users

export default {
	/*
		伪造请求回应
	*/
	bootstrap() {
		let mock = new MockAdapter(axios)

		// 获取用户列表--分页
		mock.onGet('/user/listpage').reply(config => {
			let { page, name } = config.params
			let filterUser = _Users.filter(user => {
				if(name && user.name.indexOf(name) == -1){
					return false
				}
				return true
			})
			let total = filterUser.length
			filterUser = filterUser.filter((u, index) => {
				return (index < 10 * page && index >= 10 * (page - 1))
			})

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						total: total,
						users: filterUser
					}])
				}, 500)
			})
		})

		// 删除用户
		mock.onGet('/user/remove').reply(config => {
			let { id } = config.params
			_Users = _Users.filter(user => user.id !== id)

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						code: 200,
						msg: '删除成功'
					}])
				}, 500)
			})
		})
	}
} 