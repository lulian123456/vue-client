import { getQuery } from './services.js'
import {HOME,BANNER,FOLLOW,COLUMN,DETAIL} from './types.js'
export default {
  
  [HOME]: ({commit,state},payload) => {
    getQuery({collectionName:'home'})
      .then(
        result => commit(HOME,result)
      )
  },
  
  [BANNER]: ({commit,state},payload) => {
    getQuery({collectionName:'banner',params:{_page:1,_limit:5}})
      .then(
        result => commit(BANNER,result)
      )
  },
  
  [FOLLOW]: ({commit,state},payload) => {
    getQuery({collectionName:'follow',params:{_page:1,_limit:15}})
      .then(
        result => commit(FOLLOW,result)
      )
  },
  
  [COLUMN]: ({commit,state},payload) => {
    getQuery({collectionName:'column',params:{_page:1,_limit:10}})
      .then(
        result => commit(COLUMN,result)
      )
  },
  
  [DETAIL]: ({commit,state},{collectionName,_id}) => {
    getQuery({collectionName,_id})
      .then(
        result => commit(DETAIL,result)
      )
  },
  
  
  
}