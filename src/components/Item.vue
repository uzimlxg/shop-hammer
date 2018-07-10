<template>
    <div class="item">
        <div>
            <div class="item-img">
                <img :src="data.children[index].cover">
            </div>
            <h6>{{data.title}}</h6>
            <h3 >{{data.subTitle}}</h3>

            <div class="params-colors">
                <ul class="colors-list">
                    <li @click="change(n)" v-for="children,n of data.children">
                        <a href="javascript:;" :class="{active: n == index}">
                            <img :src="children.colorStyle">
                        </a>
                    </li>
                </ul>
            </div>

            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <router-link :to="{name:'item', params: {id: data.children[index].id}}">查看详情</router-link>
                </span>
                <span class="item-blue-btn">
                    加入购物车
                </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{(data.children[index].price/100).toFixed(2)}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <a href="javascript:;" target="_blank"></a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Item',
        props: ['data'],
        data() {
            return {
                // 当前显示的子商品的下标
                index: 0
            }
        },
        methods: {
            change(n) {
                this.index = n;
            }
        }
    }

</script>
