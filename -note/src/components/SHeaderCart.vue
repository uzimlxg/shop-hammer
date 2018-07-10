<template>
    <li class="nav-cart">
        <a href="javascript:;">购物车</a>
        <!--根据class改变颜色-->
        <span class="cart-empty-num cart-num">
            <i>{{carts.length}}</i>
        </span>
        <div class="nav-cart-wrapper">
            <div class="nav-cart-list">
                <div v-if="carts.length == 0" class="empty">
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                </div>
                <div v-else class="full">
                    <div class="nav-cart-items">
                        <ul>
                            <li v-for="cart of carts" class="clear">
                                <div class="cart-item js-cart-item cart-item-sell">
                                    <div class="cart-item-inner">
                                        <div class="item-thumb">
                                            <img :src="cart.cover" />
                                        </div>
                                        <div class="item-desc">
                                            <div class="cart-cell">
                                                <h4>
                                                    <router-link :to="{name:'item',params:{id: cart.itemId}}">{{cart.title}}</router-link>
                                                </h4>
                                                <p class="attrs">
                                                    <span>{{cart.name}}</span>
                                                </p>
                                                <h6>
                                                    <span class="price-icon">¥</span>
                                                    <span class="price-num">{{(cart.price/100).toFixed(2)}}</span>
                                                    <span class="item-num">x {{cart.quantity}}</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="del-btn" @click="remove(cart.id)">删除</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-cart-total">
                        <p>共 <strong class="ng-binding">{{total.quantity}}</strong> 件商品</p>
                        <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{(total.price/100).toFixed(2)}}</span></h5>
                        <h6>
                            <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'SHeaderCart',
        data() {
            return {
                carts: [],
                total: {
                    quantity: 0,
                    price: 0
                }
            }
        },
        created() {
            this.getCarts();
        },
        methods: {
            remove(cartId) {
                axios({
                    method: 'POST',
                    url: '/api/cart/delete',
                    data: {
                        cart_id: cartId
                    }
                }).then(res => {
                    if (res.data.code == 0) {
                        this.getCarts();
                    }
                });
            },

            getCarts() {
                axios({
                    method: 'get',
                    url: '/api/cart'
                }).then(res => {
                    // console.log(res);
                    if (res.data.code == 0) {
                        this.carts = res.data.data;

                        this.carts.forEach(cart => {
                            this.total.quantity += cart.quantity;
                            this.total.price += cart.quantity * cart.price;
                        });
                    }

                });
            }
        }
    }
</script>
