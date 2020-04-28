import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {View, FlatList} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import * as FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard'


const CryptoContainer = () => {

    const crypto = useSelector(state=>state.crypto);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(FetchCoinData.fetchCoinData());

    },[dispatch]) 
    
    if (crypto.isFetching) {
        return(
            <View>
                <Spinner
                visible={crypto.isFetching}
                textContent='Loading...'
                textStyle={{color:'#253145'}}
                animation='fade'/>
            </View>
        )
    }
        return (
            <FlatList
            data={crypto.data.data}
            keyExtractor={item=>item.name}
            renderItem={itemData => <CoinCard
                key={itemData.item.id}
                id={itemData.item.id}
                coin_name={itemData.item.name}
                symbol={itemData.item.symbol}
                price_usd={itemData.item.quote.USD.price}
                percent_change_24hr={itemData.item.quote.USD.percent_change_24h}
                percent_change_7d={itemData.item.quote.USD.percent_change_7d}/>}/>

    )
}


export default CryptoContainer;

