<template>
  <div class="hello" @click="invokePushItems(item)">
    page1
    <button @click.stop="getData">获取数据</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'page1',
  data () {
    return {
      item:{
        id:11,
        name:'yzyssb',
        age:20
      }
    }
  },
  computed:{
    ...mapGetters('collection',{
      collects:'renderCollects'
    })
  },
  created(){
    this.$store.dispatch('collection/invokePushItems',this.item)
  },
  methods:{
    getData(){
      console.log(this.collects)
    },
    ...mapActions('collection',['invokePushItems'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style lang="less" scoped>
@red:red;
@pink:pink;
.hello{
  p{
    color:@pink;
  }
}
</style>-->
<style lang="scss" scoped>
$red: red;
$pink: pink;
.hello {
  p {
    color: $pink;
  }
}
</style>
