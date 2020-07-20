<template>
  <div class="pages__padding">
    <uc-cell
      v-for="(item,index) of follow"
      :data="item"
      :index="index"
      :key="item._id"
      collectionName="follow"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/uc-cell.vue'
  
  import {FOLLOW} from '../store/types.js'
  import {mapState} from 'vuex'
  export default {
    name:'follow',
    props:{},
    components:{
      UcCell
    },
    mounted(){
      this.$store.dispatch(FOLLOW)
    },
    updated(){},
    methods:{},
	computed:mapState(['follow'])
  }
</script>

<style>
  .follow{
    padding-top: .6rem;
  }
</style>
