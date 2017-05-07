<template>

    <div class="home">
        <header class="header">
            <div class="logo">
                <a href="#"><img src="images/header_logo.png"></a>
            </div>
            <div class="appdown">
                <a href="#"><img src="images/header_app.png"></a>
            </div>
        </header>
        <div class="search">
            <input type="text" placeholder="请输入你想比价的商品">
            <router-link to="discountList">
                <button class="btn">搜索</button>
            </router-link>
            
        </div>

        <!--菜单列表-->
        <div class="menu">
            <ul class="list clearfix">
                <li v-for="(item,i) in data_menu" v-show="(i>7)?flag:true" @click="(i==7)?setToggle():null">
                     <router-link :to="{name: menu_url[i]}">
                        <!--item.titlehref-->
                        <!--<img :src="data_menu_imgurl[i]">-->
                        <div v-html="item.img"></div>
                        <p v-text="item.name"></p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--超值优惠推荐-->
        <div class="recommend-list">
            <header>
                <span>超值折扣推荐</span>
                <img src="images/more.png" alt="">
            </header>
            <ul class="list">
                <li v-for="(item,i) in data_commend">
                    <a href="" class="clearfix">
                        <div class="pic" v-html="item.productImg2"></div>
                        <div class="info">
                            <div class="title"><span v-text="item.productName"></span> <span class="price" v-text="item.productPinkage"></span></div>
                            <div class="other clearfix">
                                <div class="address"><span v-text="item.productFrom"></span> | <span v-text="item.productTime"></span></div>
                                <div class="comment">
                                    <i></i>
                                    <span>{{item.productComCount | getNum}}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="more"><button>更多优惠信息 >></button></div>
        <div class="list-title-content">
            <span>品牌排行</span>
            <img src="images/more.png">
        </div>
        <footer-vue></footer-vue>
        <loading v-show="loading_flag"></loading>
    </div>

</template>

<script>
    import discountHeader from '../commom/discountHeader.vue'
    import footerVue from '../commom/footer.vue'
    import loading from '../commom/loading.vue'
    export default{
        data(){
            return{
                data_menu: [],      //菜单列表
                data_commend: [],   //超值折扣推荐
                flag: false,         //菜单列表显示/隐藏控制
                menu_url: ['','saveList','discountList','','','','','','','','',''],  //配置路由地址
                loading_flag: true
            }
        },
        created(){

            // 菜单列表
            this.$http.get('http://139.199.157.195:9090/api/getindexmenu').then(data => {
                this.data_menu = data.body.result
                
            })


            // 超值折扣推荐
            this.$http.get('http://139.199.157.195:9090/api/getmoneyctrl').then(data => {
                this.data_commend = data.body.result
                this.commend_num = '1'

                this.loading_flag = false
                console.log(this.data_commend);
            })
        },
        methods: {
            // 点击更多，显示/隐藏列表
            setToggle(){
                this.flag = !this.flag
            }
        },
        // 组件
        components: {
            footerVue,
            discountHeader,
            loading
        },
        // 过滤器
        filters: {
            getNum(str){
                var reg = /\d+/g
                return reg.exec(str)[0]
            }
        }
    }
</script>