<template>

    <div class="footer">
        <div class="footer-top">
            <a href="#">登录</a>
            <a href="#">注册</a>
            <a href="#">返回顶部</a>
        </div>
        <div class="footer-bottom">
            <p><a href="#">手机APP下载</a> 慢慢买手机版<span>--掌上比价平台</span></p>
            <p>m.manmanbuy.com</p>
        </div>
    </div>

</template>
<style lang='less'>
    .footer{
        background-color: #EFEFEF;
        color: #000;
        .footer-top{
            border-top: 1px solid #C4C4C4;
            border-bottom: 1px solid #C4C4C4;
            text-align: center;
            height: 40px;
            a{
                color: #000;
                font-size: 14px;
                float: left;
                width: 33.333%;
                line-height: 40px;
                border-right: 1px solid #C4C4C4;
            }
            a:last-child{
                border: none;
            }
        }
        .footer-bottom{
            padding: 20px 0;
            p{
                text-align: center;
                a{
                    color: red;
                }
                span{
                    color: #666;
                }
            }
        }
    }
</style>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods: {

        },
        components: {

        }
    }
</script>