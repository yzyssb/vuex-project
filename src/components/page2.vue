<template>
  <div class="hello">
    page2
    <my-test />
  </div>
</template>

<script>
import myTest from './myTest';
export default {
  name: 'page2',
  data () {
    return {
      
    }
  },
  components:{myTest},
  created(){
    
  },
  methods:{
    
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
