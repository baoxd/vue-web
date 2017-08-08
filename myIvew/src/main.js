import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import store from './libs/storage';
const sessionStore = store.sessionStore;

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {  
    // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    if(to.path == '/login'){
        sessionStore.remove('user');
    }

    iView.LoadingBar.start();
    Util.title(to.meta.title);
    
    let user = sessionStore.get('user');

    if(!user && to.path !='/login'){
        next({path:'/login'});
    }else{
        next();
    }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
    // render: h => h(App)
}).$mount('#app');
