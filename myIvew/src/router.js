import Login from './views/login'


const routers = [
	{
		path: '/login',
		component: Login
	},
    {
        path: '/',
        component: Login
    }
];
export default routers;