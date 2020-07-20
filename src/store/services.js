import axios from '../plugins/axios.js';

//通用服务  services api

function getQuery({collectionName, _id=null, params={_page:1, _limit: 20}}){
  
  let url = _id ? '/api/goods/' + collectionName + '/' + _id : '/api/goods/' + collectionName
  
  return axios({
    url,params
  }).then(
    res=>res.data.data
  )
}

export {getQuery}



