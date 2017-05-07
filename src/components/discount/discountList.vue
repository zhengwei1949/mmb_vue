<template>

    <div class="discountList">
        <discount-header></discount-header>
        <main>
            <ul class="list clearfix">
                <li v-for="(item,i) in data_discount">
                    <!--<router-link :to="'/chengqi/discount/discountList/'+item.productId">-->
                    <router-link :to="{name: 'discountDetial',params: {productid: item.productId}}">
                        <div class="img" v-html="item.productImg"></div>
                        <div class="title" v-text="item.productName"></div>
                        <div class="subtit" v-text="item.productPrice"></div>
                        <div class="info"><p><span v-text="item.productFrom"></span> | <span v-text="item.productTime"></span></p></div>
                    </router-link>
                </li>
            </ul>
        </main>
        <footer-vue></footer-vue>
        <loading v-show="loading_flag"></loading>
        <router-view></router-view>
    </div>
</template>

<script>
    import discountHeader from '../commom/discountHeader.vue'
    import footerVue from '../commom/footer.vue'
    import loading from '../commom/loading.vue'
    export default{
        data(){
            return{
                data_discount: [],
                loading_flag: true
            }
        },
        created(){
            this.$http.get('http://139.199.157.195:9090/api/getinlanddiscount').then(data => {
                this.data_discount = data.body.result
                // console.log(this.data_discount);
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