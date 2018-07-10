<template>
    <div id="header">
        <div class="nav-global">
            <div class="container">
                <h1 class="nav-logo">
                    <a href="javascript:;"></a>
                </h1>
                <ul class="nav-aside">
                    <s-header-user></s-header-user>
                    <!--active-->
                    <s-header-cart></s-header-cart>
                </ul>
                <ul class="nav-list">
                    <li><a href="javascript:;">在线商城</a></li>
                    <li><a href="javascript:;">坚果 Pro</a></li>
                    <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
                    <li><a href="javascript:;">Smartisan OS</a></li>
                    <li><a href="javascript:;">欢喜云</a></li>
                    <li><a href="javascript:;">应用下载</a></li>
                    <li><a href="javascript:;">官方论坛</a></li>
                </ul>
            </div>
        </div>
        <div class="nav-sub">
            <div class="nav-sub-wrapper">
                <div class="container">
                    <ul class="nav-list">
                        <li><a href="javascript:;">首页</a></li>
                        <li><a href="javascript:;">手机</a></li>
                        <li><a href="javascript:;">“足迹系列”手感膜</a></li>
                        <li class="active"><a href="javascript:;">官方配件</a></li>
                        <li><a href="javascript:;">周边产品</a></li>
                        <li><a href="javascript:;">第三方配件</a></li>
                        <li><a href="javascript:;">全部商品</a></li>
                        <li><a href="javascript:;">服务</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import '@/assets/css/header.css';

    import SHeaderCart from '@/components/SHeaderCart'
    import SHeaderUser from '@/components/SHeaderUser'

    export default {
        name: 'SHeader',
        components: {
            SHeaderCart,
            SHeaderUser
        }
    }
</script>
