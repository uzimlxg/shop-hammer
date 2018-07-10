<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'App',
        created() {
            axios({
                method: 'get',
                url: '/api/user/verify'
            }).then(res => {
                if (res.data.code == 0) {
                    this.$store.commit('login', res.data.data);
                }
            });
        }
    }
</script>
