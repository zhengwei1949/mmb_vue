
let routes = [
    {name: 'root',path: '/',redirect: '/chengqi/home'},        //配置默认访问首页
    // 
    {
        name: 'home',
        path: '/chengqi/home',
        component: require('./components/home/home.vue'),
    },
    // {name: '', path: 'url'}

    // 国内折扣
    {
        name: 'discount',
        path: '/chengqi/discount/',
        component: require('./components/discount/discount.vue'),
        children: [
            {
                name: 'discountList',
                path: 'discountList',
                component: require('./components/discount/discountList.vue')
            },
            {
                name: 'discountDetial',
                path: 'discountList/:productid',
                component: require('./components/discount/discountDetial.vue')
            },
        ]
    },
    //  省钱控
    {
        name: 'saveList',
        path: '/chengqi/saveMoney/saveList',
        component: require('./components/saveMoney/saveList.vue')
    },
    {
        name: 'saveDetial',
        path: '/chengqi/saveMoney/saveList/:productid',
        component: require('./components/saveMoney/saveDetial.vue')
    },


    // 其他模块



   {name: 'error',path: '*',component: require('./components/commom/404.vue')},        //配置访问出错页 

]


   
export default routes


