import Login from './views/login'
import NotFound from './views/NotFound'
import Main from './views/main'
import Home from './views/home'
import Table from './views/nav1/table'

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
        component: Home,
        name: '工作台',
        iconCls: 'ios-home',
        children: [
        	{
        		path: '/main',
        		component: Main,
        		name:'主页',
        		hidden: false
        	},
        	{
        		path: '/table',
        		component: Table,
        		name: '表格',
        		hidden: false
        	}
        ]
    },
    {
    	path: '/',
    	component: Home,
    	name:'',
    	iconCls:'social-freebsd-devil',
    	leaf:true,
    	children:[{
    		path:'/page6',
    		component: Login,
    		name:'证书打印'
    	}]
    }
];
export default routers;