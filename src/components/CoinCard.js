import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24hr, percent_change_7d, id}) => {

    let imageUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <Text style={styles.coinSymbol}>{symbol}</Text>
                <Text style={styles.seperator}>|</Text>
                <Text style={styles.coinName}>{coin_name}</Text>
                <Text style={styles.coinPrice}>{price_usd}<Text style={styles.moneySymbol}> $ </Text></Text>

            </View>
            <View style={styles.statisticsContainer} >
                <Text>24H:
                    <Text style={ percent_change_24hr < 0 ? styles.percentageChangeMinus:styles.percentageChangePlus} >{percent_change_24hr} %</Text>
                </Text>
                <Text>7D:
                    <Text style={ percent_change_7d < 0 ? styles.percentageChangeMinus:styles.percentageChangePlus} >{percent_change_7d} %</Text>
                </Text>
            </View>
        </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:3,
        padding:20
    },
    upperRow:{
        display:'flex',
        flexDirection:'row',
        marginBottom:15,

    },
    coinSymbol:{
        marginTop:10,
        marginLeft:20,
        marginRight:5,
        fontWeight:'bold'
    },
    coinName:{
        marginTop:10,
        marginLeft:5,
        marginRight:20
    },
    seperator:{
        marginTop:10,

    },
    coinPrice:{
        marginTop:10,
        marginLeft:'auto',
        marginRight:10,
        fontWeight:'bold'
    },
    image:{
        height:35,
        width:35
    },
    moneySymbol:{
        fontWeight:'bold'
    },
    statisticsContainer:{
        display:'flex',
        borderTopColor:'#fefefe',
        borderTopWidth:2,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    percentageChangePlus:{
        color:'#00bfa5',
        fontWeight:'bold',
        marginLeft:5
    },
    percentageChangeMinus:{
        color:'#dd2c00',
        fontWeight:'bold',
        marginLeft:5
    }
})

export default CoinCard;
