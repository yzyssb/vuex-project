<template>
  <div id="app">
    <img src="http://www.xiaoniren.com.cn/upload/news/image/201701/14847357197986.jpg">
    <router-view/>
    <div class="footer" v-if="isShow" @click="getNewNum(1)">{{num}}</div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {

    };
  },
  computed: {
    // ...mapState({
    //   isShow: state => state.footerStatus.showFooter,
    //   num: state => state.footerStatus.changableNum,
    // }),
    ...mapGetters('footerStatus',{
      num:'getChangableNum',
      isShow:'isShow',
    })
  },
  created(){
    
  },
  methods:{
    // ...mapActions('footerStatus',['getNewNum'])
    getNewNum(num){
      this.$store.dispatch('footerStatus/getNewNum',num)
    }
  },
  watch: {
    $route(to, from) {
      if(to.path=='/'){
        this.$store.dispatch('footerStatus/showFooter')
      }else{
        this.$store.dispatch('footerStatus/hideFooter')
      }
      this.$store.dispatch('footerStatus/getNewNum',1)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
</style>
<style lang="less" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>

