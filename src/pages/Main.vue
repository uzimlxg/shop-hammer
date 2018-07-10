<template>
    <div>
        <s-header></s-header>
        <div id="main">
            <div class="sku-box store-content">
                <div class="sort-option">
                    <ul class="line clear">
                        <li><a href="javascript:;" class="active">综合排序</a></li>
                        <li><a href="javascript:;" class="">销量排序</a></li>
                        <li><a href="javascript:;" class="">价格低到高</a></li>
                        <li><a href="javascript:;" class="">价格高到低</a></li>
                    </ul>
                </div>
                <div class="gray-box">
                    <div class="item-box">

                        <item v-for="item of items" :data="item"></item>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import '@/assets/css/goodsList.css';

    import Item from '@/components/Item';
    import SHeader from '@/components/SHeader';

    export default {
        name: 'Main',
        components: {
            Item,
            SHeader
        },
        data() {
            return {
                items: []
            }
        },
        created() {
            axios({
                method: 'get',
                //url: 'http://localhost:9999/item'
                url: '/api/item'
            }).then(res => {
                // console.log(res);
                this.items = res.data.data;
            });
        }
    }
</script>
