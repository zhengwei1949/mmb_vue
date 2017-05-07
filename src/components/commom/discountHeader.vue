
<template>
    <div class="discountHeader">
        <header>
            <div class="logo">
                <router-link :to="flag?{name: 'discountList'}:{name: 'home'}" ><img src="images/left.png"></router-link>
            </div>
            <div class="center">国内折扣</div>
            <div class="appdown">
                <a href="#"><img src="images/header_app.png"></a>
            </div>
        </header>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                flag: false
            }
        },
        created(){
            var routeUrl = this.$route
            if(routeUrl.params.productid){
                this.flag = true
            }
            
        }, 
    }
</script>

<style lang='less'>
    .discountHeader{
        header{
            height: 50px;
            background-color: #ff841d;
            border-bottom: 1px solid #e6e6e6;
            position: relative;
            a{
                display: block;
            }
            .logo{
                position: absolute;
                top: 14px;
                left: 20px;
                img{
                    width: 17px;
                    height: 27px; 
                }
            }
            .center{
                color: #fff;
                font-size: 20px;
                text-align: center;
                line-height: 50px;
                font-weight: 700;
            }
            .appdown{
                position: absolute;
                right: 5px;
                top: 9px;
                a{
                    display: block;
                    img{
                        height: 34px;
                        width: 34px;
                    }
                }
                
            }
        }
    }
    
</style>