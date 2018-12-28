<template>
  <div class="hello">
    <p @click="getData">HelloWorld</p>
    <ul>
      <li :class="activeTab==1&&'active'" @click="tabChange(1)">1111</li>
      <li :class="activeTab==2&&'active'" @click="tabChange(2)">2222</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab:'1',
    }
  },
  created(){
    // this.pushData()
  },
  methods:{
    pushData(){
      this.$api.post('/api/php/InsertData.php', {
        first:'崔',last:'冉',phone:'15555555555',email:'55556666@qq.com'
      }, response => {
        if (response.status >= 200 && response.status < 300) {
            console.log(response.data);
        } else {
            console.log(response.message);
        }
      });
    },
    getData(){
      this.$api.post('/api/php/GetDatas.php', {}, response => {
        if (response.status >= 200 && response.status < 300) {
            console.log(response.data);
        } else {
            console.log(response.message);
        }
      });
    },
    tabChange(index){
      this.activeTab=index
      this.$router.replace(index==1?'/':'/page2')
    }
  },
  watch:{
    "$route":function(to,from){
      this.activeTab=to.path=='/'?1:2
    }
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
ul{list-style: none;}
.hello {
  p {
    color: $pink;
  }
  ul{
    display: flex;
    li{
      width:50%;
      &.active{
        color:$red;
      }
    }
  }
  .num{
    font-size: 20px;
    color:blue;
  }
}
</style>
