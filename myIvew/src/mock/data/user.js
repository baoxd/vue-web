import Mock from 'mockjs'

const Users = [];

for(var i = 0 ; i < 86; i++){
	Users.push(Mock.mock({
        id: Mock.mock('@increment'),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}

export {Users}