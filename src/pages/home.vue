<template>
  <div class="pages__padding">
    <Banner :data="banner" collectionName="banner" />
    <uc-cell
      v-for="(item,index) of home"
      :data="item"
      :index="index"
      :key="item._id"
      collectionName="home"
     />
  </div>
</template>

<script>
  
  import Banner from '../components/banner/banner.vue'
  import UcCell from '../components/uc-cell/uc-cell.vue'
  
  import {mapState} from 'vuex'
  import {BANNER,HOME} from '../store/types.js'

  export default {
    name:'home',
    props:{},
    components:{Banner,UcCell},
    mounted(){
      this.$store.dispatch(BANNER);
	  this.$store.dispatch(HOME);
    },
    updated(){},
    methods:{},
	computed:mapState(['home','banner'])
  }
</script>

<style>
  .home{}
</style>
