<template>
  <div class="pages__padding">
    <uc-cell
      v-for="(item,index) of column"
      :data="item"
      :key="item._id"
      collectionName="column"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/uc-cell.vue'
  import {mapState} from 'vuex'
  import {COLUMN} from '../store/types.js'
  export default {
    name:'column',
    props:{},
    components:{UcCell},
    mounted(){
      this.$store.dispatch(COLUMN)
    },
    updated(){},
    methods:{},
	computed:mapState(['column'])
  }
</script>

<style>
</style>
