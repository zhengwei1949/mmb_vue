<template>

    <div class="discountDetial">
        <discount-header></discount-header>
        <main>
            <div class="title">
                <h2 v-text="data_detials.productName"></h2>
                <h3 v-text="data_detials.productPrice"></h3>
            </div>
            <div class="info"><span class="mall" v-text="data_detials.productFrom"></span> <span class="time" v-text="data_detials.productTime"> </span> <span class="author" v-text="data_detials.productTips"></span></div>
            <div class="content">
                <div class="up clearfix">
                    <div class="left" v-text="data_detials.productInfo"></div>
                    <div class="right" v-html="data_detials.productImg2"></div>
                </div>
                <div class="down" v-html="data_detials.productImg"></div>
                <div class="go-buy"><button class="btn">前往购买</button></div>
                <!--<div class="sao"><img src="images/mmbweixin2.png" alt=""></div>-->
            </div>
            <div class="comment">
                <p class="title">发表评论</p>
                <div class="form">
                    <textarea></textarea>
                    <div class="down"><button class="btn">发表评论</button></div>
                    
                </div>
                <p class="result">最新评论</p>
            </div>
        </main>
        <footer-vue></footer-vue>
        <loading v-show="loading_flag"></loading>
    </div>

</template>

<script>
    import footerVue from '../commom/footer.vue'
    import discountHeader from '../commom/discountHeader.vue'
    import loading from '../commom/loading.vue'
    export default{
        data(){
            return{
                data_detials: '',
                productid: '',
                loading_flag: true
            }
        },
        created(){
            // 获取路由中的动态的参数
            this.productid = this.$route.params.productid
            console.log(this.$route.params)
            this.$http.get('http://139.199.157.195:9090/api/getmoneyctrlproduct',{
                params:{
                    productid: this.productid
                }
            }).then(data => {
                this.data_detials = data.body.result[0]  
                console.log(this.data_detials)
                this.loading_flag = false
            })
        },
        methods: {

        },
        components: {
            footerVue,
            discountHeader,
            loading
        }
    }
</script>