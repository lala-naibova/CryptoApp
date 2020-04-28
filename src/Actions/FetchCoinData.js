import axios from 'axios'

import {apiBaseUrl, api_key} from './../Utils/Constants'
import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_SUCCESS,FETCHING_COIN_DATA_FAIL} from './../Utils/ActionTypes'

export  const fetchCoinData=()=> {
    return dispatch =>{

        dispatch({type:FETCHING_COIN_DATA})
        return axios.get(`${apiBaseUrl}`,
        {   
            qs: {
            'start': '1',
            'limit': '10',
            'convert': 'USD'
          },
            headers: {
                'X-CMC_PRO_API_KEY': api_key
              }
        })
        .then(res=>{
            return dispatch({type:FETCHING_COIN_DATA_SUCCESS, payload:res.data})
        })
        .catch(err=>{
            return dispatch({type:FETCHING_COIN_DATA_FAIL, err:err})
        })
    }
}
