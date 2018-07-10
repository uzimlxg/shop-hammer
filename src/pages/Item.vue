<template>
    <div>
        <s-header></s-header>
        <div id="main">
            <div class="store-content item">
                <div class="item-box">
                    <div class="gallery-wrapper">
                        <div class="gallery">
                            <div class="thumbnail">
                                <ul>
                                    <li v-for="album,n of item.album" :class="{on: n == index }" @click="change(n)">
                                        <img style="width: 54px;height: 54px;" :src="album">
                                    </li>
                                </ul>
                            </div>
                            <div class="thumb">
                                <ul>
                                    <li class="on">
                                        <img style="width: 440px;height: 440px;" :src="item.album && item.album[index]">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="banner">
                        <div class="sku-custom-title">
                            <div class="params-price">
                                <span><em>¥</em><i>{{(item.price/100).toFixed(2)}}</i></span>
                            </div>
                            <div class="params-info">
                                <h4>{{pItem.title}}</h4>
                                <h6>{{pItem.subTitle}}</h6>
                            </div>
                        </div>
                        <div class="sku-dynamic-params-panel">
                            <div class="sku-dynamic-params clear">
                                <span class="params-name">颜色</span>
                                <ul class="params-colors">
                                    <li v-for="child of pItem.children" :class="{cur: child.id == item.id }">
                                        <router-link :to="{name: 'item', params: {id: child.id}}">
                                            <i>
                                                <img :src="child.colorStyle">
                                            </i>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="sku-dynamic-params clear">
                                <div class="params-name">数量</div>
                                <div class="params-detail clear">
                                    <div class="item-num js-select-quantity">
                                        <span class="down down-disabled">-</span>
                                        <span class="num">1</span>
                                        <span class="up up-disabled">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sku-status">
                            <div class="cart-operation-wrapper clearfix">
                                <span class="blue-title-btn js-add-cart"><a>加入购物车</a></span>
                                <span class="gray-title-btn"><a>现在购买</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SHeader from '@/components/SHeader';
    import axios from 'axios';
    import '@/assets/css/item.css';

    export default {
        name: 'Item',
        components: {
            SHeader
        },
        data() {
            return {
                pItem: {},
                item: {},
                // 当前显示的图片的下标
                index: 0
            }
        },
        created() {
            this.getData();
        },
            beforeRouteUpdate(to, from, next) {
            // 一定要调用next，先调用next，方便下面获取新的params的值
            next();
            this.getData();
        },
        methods: {
            change(n) {
                this.index = n;

            },
            getData() {
                let id = this.$route.params.id;

                 axios({
                    method: 'get',
                    url: '/api/item/' + id
                }).then(res => {
                    // console.log(res);
                    this.pItem = res.data.data;

                    this.item = this.pItem.children.find(child => child.id == id);
                });
            }
        }
    }
</script>
