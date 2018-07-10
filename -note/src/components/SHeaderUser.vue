<template>
    <li class="nav-user">
        <a href="javascript:;">个人中心</a>
        <!--active-->
        <div class="nav-user-wrapper">

            <div v-if="user.uid != 0" class="nav-user-list">
                <dl class="nav-user-avatar">
                    <dd><span class="ng-scope"></span></dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                    <li class="order"><a href="javascript:;">我的订单</a></li>
                    <li class="support"><a href="javascript:;">售后服务</a></li>
                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                    <li class="information"><a href="javascript:;">账户资料</a></li>
                    <li class="address"><a href="javascript:;">收货地址</a></li>
                    <li class="logout"><a href="javascript:;">退出</a></li>
                </ul>
            </div>

            <div v-else class="nav-user-list">
                <ul>
                    <li class="logout">
                        <router-link to="/login">登录</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </li>
</template>

<script>

    export default {
        name: 'SHeaderUser',
        computed: {
            user() {
                return this.$store.state.user;
            }
        }
    }
</script>
