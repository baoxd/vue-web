import Login from './views/login'
import NotFound from './views/NotFound'


const routers = [
	{
		path: '/login',
		component: Login,
		hidden: true
	},
	{
		path: '/404',
		component: NotFound,
		hidden: true
	},
    {
        path: '/',
        component: Login
    }
];
export default routers;