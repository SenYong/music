import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
    //单一状态树
    state: {
        detailSign: false,
        infos: {
            id: "", 
            name: "", 
            time: "",
            img: ""  
        },
        sign: {
            day: {},
            tomorrow: {},
            week: {},
            month: {},
            year: {}
        },
        musicSrc: "",
        getMusicLrc: "",
        audio: {
            songUrl: '',
            imgUrl: '',
            songName: '',
            singer: '',
            songLength: 0,
            currentLength: 0,
            currentFlag: false
        }
    },

    //状态获取
    getters: {
        detailSign: state => state.detailSign,
        infos: state => state.infos,
        sign: state => state.sign,
        musicSrc: state => state.musicSrc,
        getMusicLrc: state => state.getMusicLrc,
        audio: state => state.audio
    },

    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，store.commit('increment'),触发同步事件
    mutations: {
        showDetail: (state, flag) => {
            state.detailSign = flag
        },
        getInfo: (state, infos) => {
            state.infos = {...(state.infos), ...infos}
        },
        getSignDetail: (state, sign) => {
            state.sign = sign
        },
        getMusic: (state, musicSrc) => {
            state.musicSrc = musicSrc
        },
        getMusicLrc: (state, getMusicLrc) => {
            state.getMusicLrc = getMusicLrc
        },
        setAudio: (state, audio) => {
            state.audio = {...(state.audio), ...audio}
        },
        setlrc: (state, lrc) => {
            state.audio = {...(state.audio), lrc}
        },
        setAudioTime: (state, time) => {
           state.audio.currentLength = time
        },
        setCurrent: (state,flag) => {
           state.audio.currentFlag = flag
        }
    },

    //提交mutation，可以包含异步操作
    actions: {
        getList({commit, state}, id) {
           Vue.http.get(`http://www.xyslovekw.top/index.php?id=${id}`).then(res=> {
               console.log(res)
               var obj = JSON.parse(res.data)
               var day = obj.showapi_res_body.day,
                   tomorrow = obj.showapi_res_body.tomorrow,
                   week = obj.showapi_res_body.week,
                   month = obj.showapi_res_body.month,
                   year = obj.showapi_res_body.year,
                   sign = {day, tomorrow, week, month, year}
               commit('getSignDetail', sign) 
           })
        },
        getsong ({commit,state},hash) {
            Vue.http.get(`http://www.xyslovekw.top/index.php?hash=${hash}&getsong=getsong`).then(res=> {
                console.log(res.data)
                var json_obj = JSON.parse(res.data),
                   songUrl = json_obj.url,
                   imgUrl = json_obj.imgUrl.split('{size}').join('100'),
                   songName = json_obj.songName,
                   singer = json_obj.choricSinger,
                   songLength = json_obj.timeLength,
                   currentLength = 0,
                   audio = {songUrl, imgUrl, songName, singer, songLength, currentLength}
                   console.log(audio)
                   commit('setAudio', audio)
            })
        },
        getlrc({commit,state},hash) {
             Vue.http.get(`http://www.xyslovekw.top/index.php?hash=${hash}&getlrc=getlrc`).then(res=> {
                commit('setlrc',res.data)
             })
        }
    }
})

export default store