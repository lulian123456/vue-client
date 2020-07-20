<template>
  <div id="app">
    <Loading v-show="$store.state.bLoading"/>    
    <Header v-show="bNav"/>
    <router-view></router-view>
    <Footer v-show="bFoot"/>
  </div>
</template>
<script>
  import Header from './layouts/header.vue'
  import Footer from './layouts/footer.vue'
  import Loading from './components/loading'
  
  import {mapState} from 'vuex'
  import {NAV,FOOT} from './store/types.js'
  export default {
    name: 'App',
    data:()=>({
    }),
    methods:{
    },
    watch:{
    	$route:{//路由监听
        handler(to){
          let path = to.path;
          if(/home|follow|column/.test(path)){
            this.$store.commit(NAV,true);
			this.$store.commit(FOOT,true);
          }
          if(/detail|login|reg/.test(path)){
            this.$store.commit(NAV,false);
            this.$store.commit(FOOT,false);
          }
          if(/user/.test(path)){
            this.$store.commit(NAV,false);
            this.$store.commit(FOOT,true);
          }
        },
        immediate:true
      }
    },
    mounted(){
    },
	computed:mapState(['bNav','bFoot']),
    components: {
      Footer,Header,Loading
    }
  }
</script>

<style>
  
</style>
