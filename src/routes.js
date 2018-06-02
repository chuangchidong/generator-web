import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import Mysql from './pages/gen/Mysql.vue'
import Table from './pages/gen/Table.vue'
import Form from './pages/gen/Form.vue'
import user from './pages/gen/user.vue'
import Doc from './pages/gen/Doc.vue'
import echarts from './pages/charts/echarts.vue'

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '代码生成器',
        iconCls: 'ios-home', //图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/mysql', component: Mysql, name: '数据库' },
            { path: '/user', component: user, name: '接口文档' },
            { path: '/table', component: Table, name: '列表' },
            { path: '/doc', component: Doc, name: '文档' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '数据图',
        iconCls: 'stats-bars',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;