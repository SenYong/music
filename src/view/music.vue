<template>
   <div class="musics">
       <div class="headers">
           <div class="mc_header">随心听</div>
       </div>
       <mt-swipe :auto="10000" class="songlists">
            <mt-swipe-item>
              <img src="../assets/image/y_1.jpg" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/y_2.jpg" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/y_3.jpg" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/y_4.jpg" class="swipeImg">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/image/y_5.jpg" class="swipeImg">
            </mt-swipe-item>
        </mt-swipe>
        <div>
            <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)"></mt-cell>
        </div>
   </div>
</template>

<script>
    import { Indicator,Cell,Loadmore } from 'mint-ui'
    import list_index from '../jsons/list_index.js'
    export default {
        data () {
            return {
                index: 1,
                songList: [],
                allLoaded: false,
                page: 0
            }
        },
        created () {
            this.getList()
        },
        methods: {
             getList () {
                Indicator.open({
                   text: '加载中...', 
                   spinnerType: 'fading-circle'
                })
                this.parseData(list_index)
             },
             parseData (data) {
                setTimeout( () => {
                    Indicator.close()
                    this.songList = data
                })
             },
             playAudio (index) {
                var hash = this.songList[index].hash
                this.$router.push({path: '/musicDetail', query: {hash}})
             }
        }
    }
</script>

<style>
    .mint-cell-title{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;

    }
    .mint-cell-wrapper:hover{
        border: 0;
    }
    .songlists{
        margin-top: 30px;
        overflow: hidden;
    }
    .songlists img{
        width: 100%;
    }
</style>