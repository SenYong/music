<template>
  <div id="app">
      <div v-if="!detailSign">
           <div class="main">
             <!-- <keep-alive> -->
                <router-view></router-view>
             <!-- </keep-alive> -->
          </div>
          <foots></foots>
      </div>
      <sign-detail v-else></sign-detail>
  </div>
</template>

<script>
import foots from "./view/footer.vue"
import signDetail from "./view/sign-detail.vue"
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {foots, signDetail},
  computed: {
    ...mapGetters(['detailSign'])
  }
}
</script>


