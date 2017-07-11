<template>  
    <div class="file">
        <span id="file" v-show="shows">
            <span class="name">//个人简介</span></br>
            一个90后草帽小子！也是个前端爱好开发者,其他略...~ W_W~</br>
            <span class="name">//项目简介</span></br>
            此项目是本人业余开发,主要技术栈涵盖vuejs2.0、vue-router、vuex、vue-resource、mint-ui(Vue.js 的移动端组件库)、es6,涉及的功能有星座查询、音乐、问答,如果觉得还可以的话，给颗star吧,下面是个人微信小程序二维码,喜欢的可以扫面关注噢~W_W~
        </span>
        <img src="../assets/image/s_9.gif"  @click="getHtml" id="move">
        <img src="../assets/image/xm.jpg" alt="" class="xm" v-if="code">
    </div>
</template>

<script>
    export default {
        data () {
            return {
              shows: false,
              code: false,
              timer: "" 
            }
        },
        beforeRouteEnter (to, from, next) {
           next(vm => {
             vm.getHtml()
           })
        },
        beforeRouteLeave (to, from, next) {
            clearInterval(this.timer);
            next()
        },
        methods: {
            getHtml () {
                document.getElementById('move').setAttribute('class','moveImg')
                setTimeout( () => {
                    document.getElementById('move').setAttribute('class','move')
                    var str = document.getElementById('file').innerHTML
                    document.getElementById('file').innerHTML = ""
                    this.shows = true
                    var progress = 0 
                    setTimeout( () => {
                        this.timer = setInterval( () => {
                           var current = str.substr(progress,1)
                           if(current == '<') {
                              progress = str.indexOf('>',progress) + 1
                           }else{
                              progress++
                           }
                           if(progress >= str.length - 1){
                              this.code = true
                              clearInterval(this.timer);
                           }else{
                              document.getElementById('file').innerHTML = str.substring(0, progress) + (progress & 1 ? '_' : '')
                           }
                        },200)
                    }, 2000)
                }, 3000)                
            }
        }
    }
</script>
