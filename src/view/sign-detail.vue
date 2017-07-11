<template>
   <div>
       <div class="bk"></div>
       <audio :src="musicSrc" style="display:none"></audio>
       <div class="signDetail">
           <div class="head">
              <span class="back" @click="back"></span>
              <span>星座详情</span>
           </div>
           <div class="bodys">
               <div class="names">{{infos.name}}</div>
               <div class="times">{{infos.name}}出生日期为{{infos.time}}</div>
               <div class="const">
                   <img src="../assets/image/s_1.gif" alt="" v-if=" infos.name == '白羊座' " class="signImgs">
                   <img src="../assets/image/s_2.gif" alt="" v-else-if=" infos.name == '金牛座' " class="signImgs">
                   <img src="../assets/image/s_3.gif" alt="" v-else-if=" infos.name == '双子座' " class="signImgs">
                   <img src="../assets/image/s_4.gif" alt="" v-else-if=" infos.name == '巨蟹座' " class="signImgs">
                   <img src="../assets/image/s_5.gif" alt="" v-else-if=" infos.name == '狮子座' " class="signImgs">
                   <img src="../assets/image/s_6.gif" alt="" v-else-if=" infos.name == '处女座' " class="signImgs">
                   <img src="../assets/image/s_7.gif" alt="" v-else-if=" infos.name == '天秤座' " class="signImgs">
                   <img src="../assets/image/s_8.gif" alt="" v-else-if=" infos.name == '天蝎座' " class="signImgs">
                   <img src="../assets/image/s_9.gif" alt="" v-else-if=" infos.name == '射手座' " class="signImgs">
                   <img src="../assets/image/s_10.gif" alt="" v-else-if=" infos.name == '摩羯座' " class="signImgs">
                   <img src="../assets/image/s_11.gif" alt="" v-else-if=" infos.name == '水瓶座' " class="signImgs">
                   <img src="../assets/image/s_12.gif" alt="" v-else=" infos.name == '双鱼座' " class="signImgs">
              </div>
              <div v-if="sign">
                  <!-- 今日运 -->
                   <div class="ims">
                       <div class="tits">今日运</div>
                       <div class="group">
                           <div class="lt">综合指数 : </div>
                           <div class="rt">{{sign.day.summary_star}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">爱情指数:</div>
                           <div class="rt">{{sign.day.love_star}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">财富指数:</div>
                           <div class="rt">{{sign.day.money_star}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">工作指数:</div>
                           <div class="rt">{{sign.day.work_star}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">贵人星座:</div>
                           <div class="rt">{{sign.day.grxz}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">幸运数字:</div>
                           <div class="rt">{{sign.day.lucky_num}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">吉时:</div>
                           <div class="rt">{{sign.day.lucky_time}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">吉利方位:</div>
                           <div class="rt">{{sign.day.lucky_direction}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">今日提醒:</div>
                           <div class="rt">{{sign.day.day_notice}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">运势简评:</div>
                           <div class="rt">{{sign.day.general_txt}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">爱情运势:</div>
                           <div class="rt">{{sign.day.love_txt}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">工作运势:</div>
                           <div class="rt">{{sign.day.work_txt}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">财富运势:</div>
                           <div class="rt">{{sign.day.money_txt}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">时间:</div>
                           <div class="rt">{{sign.day.time}}</div>
                       </div>
                       <div class="group">
                           <div class="lt">吉色:</div>
                           <div class="rt">{{sign.day.lucky_color}}</div>
                       </div>
                   </div>
                   <!-- 明日运 -->
                   <div class="ims tw">
                       <div class="tits">明日运</div>
                       <div class="group twItem">
                           <div class="lt">综合指数:</div>
                           <div class="rt">{{sign.tomorrow.summary_star}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">爱情指数:</div>
                           <div class="rt">{{sign.tomorrow.love_star}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">财富指数:</div>
                           <div class="rt">{{sign.tomorrow.money_star}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">工作指数:</div>
                           <div class="rt">{{sign.tomorrow.work_star}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">贵人星座:</div>
                           <div class="rt">{{sign.tomorrow.grxz}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">幸运数字:</div>
                           <div class="rt">{{sign.tomorrow.lucky_num}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">吉时:</div>
                           <div class="rt">{{sign.tomorrow.lucky_time}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">吉利方位:</div>
                           <div class="rt">{{sign.tomorrow.lucky_direction}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">明日提醒:</div>
                           <div class="rt">{{sign.tomorrow.day_notice}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">运势简评:</div>
                           <div class="rt">{{sign.tomorrow.general_txt}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">爱情运势:</div>
                           <div class="rt">{{sign.tomorrow.love_txt}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">工作运势:</div>
                           <div class="rt">{{sign.tomorrow.work_txt}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">财富运势:</div>
                           <div class="rt">{{sign.tomorrow.money_txt}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">时间:</div>
                           <div class="rt">{{sign.tomorrow.time}}</div>
                       </div>
                       <div class="group twItem">
                           <div class="lt">吉色:</div>
                           <div class="rt">{{sign.tomorrow.lucky_color}}</div>
                       </div>
                   </div>
                   <!-- 周运 -->
                   <div class="ims wk">
                       <div class="tits">周运</div>
                       <div class="group wkItem">
                           <div class="lt">综合指数:</div>
                           <div class="rt">{{sign.week.summary_star}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">爱情指数:</div>
                           <div class="rt">{{sign.week.love_star}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">财富指数:</div>
                           <div class="rt">{{sign.week.money_star}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">工作指数:</div>
                           <div class="rt">{{sign.week.work_star}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">贵人星座:</div>
                           <div class="rt">{{sign.week.grxz}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">小人星座:</div>
                           <div class="rt">{{sign.week.xrxz}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">吉利颜色:</div>
                           <div class="rt">{{sign.week.lucky_color}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">幸运数字:</div>
                           <div class="rt">{{sign.week.lucky_num}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">幸运日期:</div>
                           <div class="rt">{{sign.week.lucky_day}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">吉利方位:</div>
                           <div class="rt">{{sign.week.lucky_direction}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">本周提醒:</div>
                           <div class="rt">{{sign.week.week_notice}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">运势简评:</div>
                           <div class="rt">{{sign.week.general_txt}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">爱情运势:</div>
                           <div class="rt">{{sign.week.love_txt}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">工作运势:</div>
                           <div class="rt">{{sign.week.work_txt}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">财富运势:</div>
                           <div class="rt">{{sign.week.money_txt}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">健康运势:</div>
                           <div class="rt">{{sign.week.health_txt}}</div>
                       </div>
                       <div class="group wkItem">
                           <div class="lt">时间:</div>
                           <div class="rt">{{sign.week.time}}</div>
                       </div>
                   </div>
                   <!-- 月运 -->
                   <div class="ims mh">
                       <div class="tits">月运</div>
                       <div class="group mhItem">
                           <div class="lt">综合指数:</div>
                           <div class="rt">{{sign.month.summary_star}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">爱情指数:</div>
                           <div class="rt">{{sign.month.love_star}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">财富指数:</div>
                           <div class="rt">{{sign.month.money_star}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">工作指数:</div>
                           <div class="rt">{{sign.month.work_star}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">缘分星座:</div>
                           <div class="rt">{{sign.month.yfxz}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">贵人星座:</div>
                           <div class="rt">{{sign.month.grxz}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">小人星座:</div>
                           <div class="rt">{{sign.month.xrxz}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">吉利方位:</div>
                           <div class="rt">{{sign.month.lucky_direction}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">本月优势:</div>
                           <div class="rt">{{sign.month.month_advantage}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">本月弱势:</div>
                           <div class="rt">{{sign.month.month_weakness}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">运势简评:</div>
                           <div class="rt">{{sign.month.general_txt}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">爱情运势:</div>
                           <div class="rt">{{sign.month.love_txt}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">工作运势:</div>
                           <div class="rt">{{sign.month.work_txt}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">财富运势:</div>
                           <div class="rt">{{sign.month.money_txt}}</div>
                       </div>
                       <div class="group mhItem">
                           <div class="lt">时间:</div>
                           <div class="rt">{{sign.month.time}}</div>
                       </div>
                   </div>
                   <div class="ims yr">
                       <div class="tits">年运</div>
                       <div class="group yrItem">
                           <div class="lt">综合指数:</div>
                           <div class="rt">{{sign.year.general_index}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">爱情指数:</div>
                           <div class="rt">{{sign.year.love_index}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">财富指数:</div>
                           <div class="rt">{{sign.year.money_index}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">工作指数:</div>
                           <div class="rt">{{sign.year.work_index}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">一话简评:</div>
                           <div class="rt">{{sign.year.oneword}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">运势概述:</div>
                           <div class="rt">{{sign.year.general_txt}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">爱情运势:</div>
                           <div class="rt">{{sign.year.love_txt}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">工作运势:</div>
                           <div class="rt">{{sign.year.work_txt}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">财富运势:</div>
                           <div class="rt">{{sign.year.money_txt}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">健康运势:</div>
                           <div class="rt">{{sign.year.health_txt}}</div>
                       </div>
                       <div class="group yrItem">
                           <div class="lt">时间:</div>
                           <div class="rt">{{sign.year.time}}</div>
                       </div>
                   </div>
              </div>
           </div>
       </div>
   </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
       name: 'sign-detail',
       computed: {
         ...mapGetters(['infos', 'sign', 'musicSrc'])
       },
       methods: {
         back () {
            this.$store.commit('showDetail',false)
         }
       }
    }
</script>