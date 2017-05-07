<template>

    <div class="saveMoney">
        <header>
            <div class="logo">
                <a><img src="images/left.png"></a>
            </div>
            <div class="center">省钱控 - 最新优惠</div>
            <div class="appdown">
                <a href="#"><img src="images/header_app.png"></a>
            </div>
        </header>
        <main>
            <ul class="list">
                <li v-for="(item,i) in data_List">
                    <!--<a href="" class="clearfix">-->
                    <router-link :to="{name: 'saveDetial', params: {productid: item.productId}}">
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
                    <!--</a>-->
                    </router-link>
                </li>
            </ul>
            <div class="page">
                <div class="left" @click="preve()"><button>上一页</button></div>
                <div class="center">
                    <select v-model="page" @change="getPageData(page)">
                        <option v-for="(option,i) in options" :value="(i+1)">{{(i+1)}}/{{total_page}}</option>
                    </select>
                </div>
                <div class="right" @click="next()"><button>下一页</button></div>
            </div>
            <div class="nav"><a href="">首页</a> > <a href="">省钱控</a></div>
            
        </main>
        <footer-vue></footer-vue>
        <loading v-show="loading_flag"></loading>
    </div>

</template>


<script>
    import footerVue from '../commom/footer.vue'
    import loading from '../commom/loading.vue'
    export default{
        data(){
            return{
                data_List: [],
                page_size: '',      //每页的条数
                total_count: '',    //总条数
                total_page: '',     //总页数
                loading_flag: true, 

                page: 1,        //select默认是第一页
                options: [],        //给select配置数据
            }
        },
        created(){
           
            this.pageList(this.page,'init')
           
        },
        methods: {

            //请求的数据列表
            pageList(page,str){
                this.$http.get('http://139.199.157.195:9090/api/getmoneyctrl',{
                    params:{pageid: page}
                }).then(data=>{

                        this.data_List = data.body.result
                        this.page_size = data.body.pagesize
                        this.total_count = data.body.totalCount
                        this.total_page = Math.ceil(this.total_count/this.page_size)
                        console.log(1111);
                        // console.log(this.data_List);
                        if(str == 'init'){
                            for(var i=0; i<this.total_page; i++){
                                this.options.push({value: i})
                            }
                        }
                        this.loading_flag = false
                     
                });
            },
            // select框的值发生改变
            getPageData(page){
                this.pageList(page)
            },
            // 下一页
            next(){
                this.loading_flag = true
                // 当前页码
                this.page += 1
                
                this.pageList(this.page) 
                
                
            },
            // 上一页
            preve(){
                this.loading_flag = true
                // 当前页码
                this.page -= 1
                this.pageList(this.page) 
            }
        },
        components: {
            footerVue,
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