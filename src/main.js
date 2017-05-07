// 1导入相关的包
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
// 导入跟组件
import App from './App.vue'
// 引入路由文件
import routes from './routes'

// 2使用路由，在Vue中加载vueRouter
Vue.use(vueRouter)
Vue.use(vueResource)

// 引入less
import '../static/less/common/main.less'

// 3定义路由规则对象
let router = new vueRouter({
    routes
})


// 4实例化Vue对象
new Vue({
    el: '#app',     // 组件插入的dom元素
    router,
    // render: function(create) {create(App)}
    render: c=>c(App)  //渲染函数。template
})
