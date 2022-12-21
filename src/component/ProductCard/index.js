
 import React, { useState } from 'react';
 import {
   StyleSheet,
   Text,
   View,Image, TouchableOpacity
 } from 'react-native';

 import Icon from 'react-native-vector-icons/AntDesign';
 
  const Product = ({item}) => {
    return(
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardRow}>
          <Image 
            style={styles.image}
            source={require('../../assets/images/Product/a.jpg')}
          />
          <View style={styles.featuresRow}>
            <Image
              style = {styles.features}
              source = {require('../../assets/images/Product/y3.jpg')}
            />
            <Image
              style = {styles.features}
              source = {require('../../assets/images/Product/c1.jpg')}
            />
          </View>
          <TouchableOpacity style={styles.favoriteRow}>
            <Icon style={styles.favorite} name = {true ? "heart" : "hearto"} size={22} color= {'rgb(229,50,45)'}/>
          </TouchableOpacity>
          <View style= {styles.cardBottom}>
            <Text style={styles.companyNameText}>{item.companyName}</Text>
            <Text style={styles.productNameText}>{item.productName}</Text>
            <View style={styles.pointRow}>
              <Text style={styles.priceText}>{item.price}</Text>
              <View style={styles.starRow}>
                <Icon size = {20} name = "star" color={'orange'}/>
                <Text style={styles.pointText}>{item.point}</Text> 
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    card:{
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10,
      marginTop:5,
      marginHorizontal:2,
      minHeight:300,
      minWidth:190,
      maxHeight:300,
      maxWidth:190
    },
    cardRow:{
      borderWidth:1,
      borderRadius:15,
      zIndex: 99, // added zIndex
      width:'100%',
      height:'100%',
      backgroundColor: 'white',
      borderColor:'#E6E6E6'
    },
    cardBottom:{
      width:'100%',
      height:110,
      paddingLeft:10,
      backgroundColor:'white',
      justifyContent:'flex-end',
      paddingTop:5,
      paddingRight:10,
      paddingBottom:10,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15
    },
    image:{
      width:160,
      height:150,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      marginLeft:20,
      marginBottom:50
    },
    companyNameText:{
      color:'rgb(229,50,45)',
      fontSize:17,
      fontWeight:'600'
    },
    productNameText:{
      fontSize:15,
      fontWeight:'500'
    },
    priceText:{
      fontSize:14,
      fontWeight:'500',
      marginTop:5,
    },
    pointRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10
    },
    pointText:{
      fontSize:15,
      fontWeight:'700',
      marginLeft:5,
      marginRight:5
    },
    favoriteRow:{
      borderRadius:999,
      backgroundColor:'white',
      width:35,
      height:35,
      position:'absolute',
      marginTop:5,
      marginLeft:140,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 10,
      borderWidth:1,
      zIndex: 99, // added zIndex
      borderColor:'#E6E6E6',
      justifyContent:'center',
      alignItems:'center'
    },
    favorite:{
      
    },
    featuresRow:{
      position:'absolute',
    },
    features:{
      width:35,
      height:35,
      marginLeft:5,
      marginBottom:5
    },
    starRow:{
      flexDirection:'row',
      alignItems:'center'
    }
  });
 export default Product;