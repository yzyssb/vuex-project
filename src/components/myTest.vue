<template>
  <div class="hello">
    {{num}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'myTest',
  data () {
    return {
      
    }
  },
  created(){
    
  },
  methods:{
    
  },
  computed:{
    ...mapState({
      num:state=>state.footerStatus.changableNum
    })
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
