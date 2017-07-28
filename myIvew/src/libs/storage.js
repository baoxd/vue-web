// 本地存储 

import util from './util'

const STORAGE_KEY_VALUE = 'storage_key_value'
const STORAGE_KEY_TIME = 'storage_key_time'
const STORAGE_KEY_DURATION = 'storage_key_duration'

function getStore(type) {
	let store ;

	if(type == 'session'){
		store = sessionStorage
	}else if(type == 'local'){
		store = localStorage
	}
	return store
}

let _storage = {
	// time 存储时，单位分钟, 默认永久存储
	set(type, key, value, time) {
		let store = getStore(type)
		let curTime = new Date().getTime()

		if(key && value){
			let data;

			if(time && util.getObjType(time) == 'number'){
				data = {
					STORAGE_KEY_VALUE: value,
					STORAGE_KEY_DURATION: time * 60 * 1000,
					STORAGE_KEY_TIME: curTime
				}
			}else{
				data = value
			}

			data = JSON.stringify(data)
			
			store.setItem(key, data)
		}
	},
	get(type, key) {
		let store = getStore(type)
		let curTime = new Date().getTime()

		if(key){
			let value = store.getItem(key)

			if(value){
				console.log(typeof value)
				value = JSON.parse(value)

				if(util.getObjType(value) == 'object'){
					if(value.hasOwnProperty(STORAGE_KEY_VALUE) && value.hasOwnProperty(STORAGE_KEY_TIME)
						&& value.hasOwnProperty(STORAGE_KEY_DURATION)){
						let preTime = value[STORAGE_KEY_TIME],
							duration = value[STORAGE_KEY_DURATION];

						// 超时
						if((curTime - preTime) > duration){
							value = null
							this.remove(type, key)
						}else{
							value = value[STORAGE_KEY_VALUE]
						}
					}
				}
			}
			return value
		}
	},
	remove(type, key) {
		let store = getStore(type)

		if(key){
			store.removeItem(key)
		}
	}
}

function getStorage(type){
	return {
		set(key, value, time) {
			_storage.set(type, key, value, time)
		},
		get(key) {
			return _storage.get(type, key)
		},
		remove(key) {
			_storage.remove(type, key)
		}
	}
}

let  storages = ['session', 'local'].map(type => {
	return getStorage(type)
})

export default {
	sessionStore: storages[0],
	localStore: storages[1]
}