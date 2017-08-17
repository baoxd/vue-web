// import Login from '../components/page/Login.vue'

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
        component: resolve => require(['../components/page/Login.vue'], resolve)
	},
	{
		path: '/readme',
		component: resolve => require(['../components/common/Home.vue'], resolve),
		children: [
			{
				path: '/',
				component: resolve => require(['../components/page/Readme.vue'], resolve)
			},
			{
				path: '/basetable',
				component: resolve => require(['../components/page/BaseTable.vue'], resolve)
			},
			{
				path: '/vuetable',
				component: resolve => require(['../components/page/VueTable.vue'], resolve)
			},
			{
				path: '/baseform',
				component: resolve => require(['../components/page/BaseForm.vue'], resolve)
			},
			{
				path: '/vueeditor',
				component: resolve => require(['../components/page/VueEditor.vue'], resolve)
			},
			{
				path: '/markdown',
				component: resolve => require(['../components/page/Markdown.vue'], resolve)
			}
		]
	}
]

export default routes
