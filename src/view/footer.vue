<template>
    <div class="footers">
        <div class="navbar" @click="goRouter({path: '/index'})">
           <img src="../assets/image/newsSelect.png" alt="" v-if="$route.path.indexOf('index') !== -1">
           <img src="../assets/image/news.png" alt="" v-else> 
           <span :class="{active: $route.path.indexOf('index') !== -1 }">星座运势</span>
        </div>
        <div class="navbar" @click="goRouter({path: '/music'})">
           <img src="../assets/image/serviceSelect.png" alt="" v-if="$route.path.indexOf('music') !== -1">
           <img src="../assets/image/service.png" alt="" v-else>  
           <span :class="{active: $route.path.indexOf('music') !== -1 }">听音乐</span>
        </div>
        <div class="navbar" @click="goRouter({path: '/problem'})" >
           <img src="../assets/image/indexSelect.png" alt="" v-if="$route.path.indexOf('problem') !== -1">
           <img src="../assets/image/index.png" alt="" v-else>
           <span :class="{active: $route.path.indexOf('problem') !== -1 }">问答</span>
        </div>
        <div class="navbar" @click="goRouter({path: '/profile'})" >
           <img src="../assets/image/mySelect.png" alt="" v-if="$route.path.indexOf('profile') !== -1">
           <img src="../assets/image/my.png" alt="" v-else>
           <span :class="{active: $route.path.indexOf('profile') !== -1 }">简介</span>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        data () {
            return {
                index: 1
            }
        },
        name: 'foots',
        methods: {
            goRouter(path){
                //var route=e.target.attributes.to.value;
                this.$router.push(path)
            }
        }
    }
</script>