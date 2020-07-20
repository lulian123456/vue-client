import * as types from './types.js'
export default {
  
  // type:fn
  [types.NAV]: (state,payload) => state.bNav=payload,
  [types.FOOT]:(state,payload)=>state.bFoot=payload,
  [types.LOADING]:(state,payload)=>state.bLoading=payload,
  
  [types.HOME]:(state,payload)=>state.home=payload,
  [types.FOLLOW]:(state,payload)=>state.follow=payload,
  [types.COLUMN]:(state,payload)=>state.column=payload,
  [types.BANNER]:(state,payload)=>state.banner=payload,
  
  // CLEAR_BANNER:(state,payload)=>state.banner=[],  清空数据  在组件卸载前
  
  [types.DETAIL]:(state,payload)=>state.detail=payload,
  
  [types.USER]:(state,payload)=>state.user=payload,
  
}