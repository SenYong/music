<template>
   <div class="sign">
       <div class="signHead">看星座</div>
       <mt-swipe :auto="10000" class="mtSwipe">
            <mt-swipe-item>
              <img src="../assets/image/1.png" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/2.png" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/3.png" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/4.png" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/5.png" class="swipeImg">
            </mt-swipe-item>
        </mt-swipe>
        <div class="signBody">
            <div class="signTitle">十二星座运势</div>
            <div class="signItems" @click="playAudio('baiyang', '白羊座', '3.21-4.20', '../assets/image/s_1.gif' )">
               <img src="../assets/image/s_1.gif" alt="">
               <div class="signText">
                   <span class="name">白羊座</span>
                   <span class="time">3.21-4.20</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('jinniu', '金牛座', '4.21-5.21', '../assets/image/s_2.gif')">
               <img src="../assets/image/s_2.gif" alt="">
               <div class="signText">
                   <span class="name">金牛座</span>
                   <span class="time">4.21-5.21</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('shuangzi', '双子座', '5.22-6.21', '../assets/image/s_3.gif')">
               <img src="../assets/image/s_3.gif" alt="">
               <div class="signText">
                   <span class="name">双子座</span>
                   <span class="time">5.22-6.21</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('juxie', '巨蟹座', '6.22-7.22', '../assets/image/s_4.gif')">
               <img src="../assets/image/s_4.gif" alt="">
               <div class="signText">
                   <span class="name">巨蟹座</span>
                   <span class="time">6.22-7.22</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('shizi', '狮子座', '7.23-8.22', '../assets/image/s_5.gif')">
               <img src="../assets/image/s_5.gif" alt="">
               <div class="signText">
                   <span class="name">狮子座</span>
                   <span class="time">7.23-8.22</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('chunv', '处女座', '8.23-9.23', '../assets/image/s_6.gif')">
               <img src="../assets/image/s_6.gif" alt="">
               <div class="signText">
                   <span class="name">处女座</span>
                   <span class="time">8.23-9.23</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('tiancheng', '天秤座', '9.24-10.23', '../assets/image/s_7.gif')">
               <img src="../assets/image/s_7.gif" alt="">
               <div class="signText">
                   <span class="name">天秤座</span>
                   <span class="time">9.24-10.23</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('tianxie', '天蝎座', '10.24-11.22', '../assets/image/s_8.gif')">
               <img src="../assets/image/s_8.gif" alt="">
               <div class="signText">
                   <span class="name">天蝎座</span>
                   <span class="time">10.24-11.22</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('sheshou', '射手座', '11.23-12.21', '../assets/image/s_9.gif')">
               <img src="../assets/image/s_9.gif" alt="">
               <div class="signText">
                   <span class="name">射手座</span>
                   <span class="time">11.23-12.21</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('mojie', '摩羯座', '12.22-1.20', '../assets/image/s_10.gif')">
               <img src="../assets/image/s_10.gif" alt="">
               <div class="signText">
                   <span class="name">摩羯座</span>
                   <span class="time">12.22-1.20</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('shuiping', '水瓶座', '1.21-2.19', '../assets/image/s_11.gif')">
               <img src="../assets/image/s_11.gif" alt="">
               <div class="signText">
                   <span class="name">水瓶座</span>
                   <span class="time">1.21-2.19</span>
               </div>
           </div>
           <div class="signItems" @click="playAudio('shuangyu', '双鱼座', '2.20-3.20', '../assets/image/s_12.gif')">
               <img src="../assets/image/s_12.gif" alt="">
               <div class="signText">
                   <span class="name">双鱼座</span>
                   <span class="time">2.20-3.20</span>
               </div>
           </div>
        </div>
   </div>
</template>

<script>
    import { Swipe, SwipeItem,Indicator,Cell } from 'mint-ui'
    export default {
        methods: {
            playAudio (id, name, time, img) {
                this.$store.commit('showDetail', true)
                this.$store.commit('getInfo', {id, name, time, img})
                this.$store.dispatch('getList', id)
            }
        }
    }
</script>