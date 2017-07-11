<template>
    <div>
        <div class="dr"></div>
        <div class="blem">
            <div class="heads">答人</div>
            <div class="bys" ref='ht' id="bys" style="height:75%">
                <div v-for="(item, index) in conts">
                    <div class="rt" v-if="item.meMessage">
                        <img src="../assets/image/me.png" alt="">
                        <div class="text">{{item.meMessage}}</div>
                    </div>
                    <div class="lt" v-if="item.yousMessage">
                        <img src="../assets/image/you.png" alt="">
                        <div class="text">{{item.yousMessage}}</div>
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="message">
                <input name="person" value="1" style="display:none" />
                <input  placeholder="有什么问题就问吧" name="message" v-model="value" class="ipt" @keydown.enter="getSubmit">
                <button class="bn" @click="getSubmit">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {Indicator} from 'mint-ui'
    import {mapGetters} from 'vuex'
    export default {
        data () {
            return {
                value: "",
                conts: [
                  {
                    yousMessage: "嗨，最近想我没有",
                    meMessage: ""
                  }
                ],
                num: 0
            }
        },
        methods: {
           getSubmit () {
             if(this.value == "" || this.value == null) return
             Indicator.open({
               text: '提交中...',
               spinnerType: 'fading-circle'
             })
             var value = this.value
             this.$http.get(`http://www.xyslovekw.top/index.php?person=1&message=${value}`).then(res => {
                this.conts.push({
                   yousMessage: res.body,
                   meMessage: value
                })
                document.getElementById('bys').scrollTop = document.getElementById('bys').scrollHeight - document.getElementById('bys').offsetHeight 
                this.value = ''
                Indicator.close()           
             })
           }
        }
    }
</script>