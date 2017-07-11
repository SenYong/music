<template>
    <div>
        <div class="lrcBk"></div>
        <div class="lrc">
            <audio :src="audio.songUrl" id="audioPlay" autoplay @timeupdate="change"></audio>
            <div class="lrcHead">
                <span class="back" @click="back"></span><span v-if="audio.songName">{{audio.songName}}—{{audio.singer}}</span>
            </div>
            <div class="lrcNav">
                <div class="lrcName">{{audio.songName}}</div>
                <div class="lrcAuthor">{{audio.singer}}</div>
                <div></div>
                <img :src="audio.imgUrl" alt="" class="lrcImg">
            </div>
            <div class="detail_player_lrc">
                <div class="lrc_content" :style="{'margin-top': lrcOffset + 'px'}">
                    <p v-for="(item,index) in songLrc" :class="{'isCurrentLrc':item.seconds >= audio.currentLength, 'disCurrentLrc': item.seconds < audio.currentLength}">
                        {{item.lrcContent}}
                    </p>
                </div>
            </div>
            <div class="detail_player-range container" v-if="this.audio.currentLength > 0">
                 <span class="detail_player-time">{{audio.currentLength | time}}</span>
                 <mt-range
                      id = 'range'
                      :min="0"
                      :max="audio.songLength"
                      :bar-height="3"
                      v-model="audio.currentLength"
                      @click.native="rangeChange($event)" 
                      disabled
                      style="width:75%">
                 </mt-range>
                 <span class="detail_player-time">{{audio.songLength | time}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
     import { Range, Indicator } from 'mint-ui';
    export default {
      data () {
        return {
          musicImg: '',
          hash: '',
          audio: {
            currentLength: 0
          },
          lrc: ""
        }
      },
      async created () {
        this.hash = this.$route.query.hash;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        await this.$http.get(`http://www.xyslovekw.top/index.php?hash=${this.hash}&getsong=getsong`).then(res => {
          var json_obj = JSON.parse(res.data),
                   songUrl = json_obj.url,
                   imgUrl = json_obj.imgUrl.split('{size}').join('100'),
                   songName = json_obj.songName,
                   singer = json_obj.choricSinger,
                   songLength = json_obj.timeLength,
                   currentLength = 0,
                   audio = {songUrl, imgUrl, songName, singer, songLength, currentLength}
          this.audio = audio;         
        })
        await this.$http.get(`http://www.xyslovekw.top/index.php?hash=${this.hash}&getlrc=getlrc`).then(res=> {
          this.lrc = res.data;
          Indicator.close();
        })
      },
      filters: {
            time (value) {
              var length = Math.floor(parseInt(value)) 
              var minute = Math.floor(value / 60)
              if(minute < 10){
                minute = '0' + minute
              }
              var seconds = length % 60
              if(seconds < 10){
                seconds = '0' + seconds
              }
              return minute + ':' + seconds
            }
      },
      computed: {
        songLrc () {
            if(this.lrc){
                var temp = this.lrc.split('\r\n')
                temp = temp.splice(0, temp.length - 1)
                temp = temp.map((value) => {
                    var time = value.substr(1,5)
                    var seconds = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1])
                    var lrcContent = value.substr(10)
                    return {
                        seconds,
                        lrcContent
                    }
                })
                return temp
            }

        },
        lrcOffset () {
           if(this.songLrc) {
             var offset = (this.songLrc.length - document.querySelectorAll('.isCurrentLrc').length - 2) * (-20)
             return this.audio.currentLength + offset - this.audio.currentLength
           }
        }
      },
      methods: {
        back () {
           this.$router.go(-1);
        },
        change () {
           var time = document.getElementById('audioPlay').currentTime
           this.audio.currentLength = time;
           // this.$store.commit('setAudioTime', time)
        }
      }
    }
</script>