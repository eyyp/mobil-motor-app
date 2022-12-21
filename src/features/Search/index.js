import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from '../../component/ProductCard/index';
  const App = () => {
  const [clicked,setClicked] = useState(false);
  const product = [{
    id:'1',
    companyName:'Arora',
    productName:'Ls2 Rapıt mat Siyah Kask',
    explanation:'Tüm bedenleri bulunur',
    price:'257 ₺',
    image:'../../assets/images/Product/k1.jpeg',
    point:4.5,
    favorite:true
  },
  {
    id:'1',
    companyName:'Arora',
    productName:'Ls2 Rapıt mat Siyah Kask',
    explanation:'Tüm bedenleri bulunur',
    price:'257 ₺',
    image:'../../assets/images/Product/k1.jpeg',
    point:4.5,
    favorite:true
  },
  {
    id:'1',
    companyName:'Arora',
    productName:'Ls2 Rapıt mat Siyah Kask',
    explanation:'Tüm bedenleri bulunur',
    price:'257 ₺',
    image:'../../assets/images/Product/k1.jpeg',
    point:4.5,
    favorite:true
  },
  {
    id:'1',
    companyName:'Arora',
    productName:'Ls2 Rapıt mat Siyah Kask',
    explanation:'Tüm bedenleri bulunur',
    price:'257 ₺',
    image:'../../assets/images/Product/k1.jpeg',
    point:4.5,
    favorite:true
  },]
  return(
    <View style = { styles.Body}> 
        <View style = {styles.searchBar}> 
            <TouchableOpacity style = {styles.serachButton}>
            <TextInput placeholder="Ürün ara..." placeholderTextColor={'#B2ADAD'} style = {styles.searchText} />
            <Icon name= "search" size= {15} style = {styles.searchIcon} color={'#B2ADAD'}/>
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <FlatList 
            data={product}
            renderItem={Product}
            numColumns={1}
            key={item => item.id}
            keyExtractor={item => item.id}
        />    
        </ScrollView>
    </View>
  )
 }
 const styles = StyleSheet.create({
    Body:{
      flex:1,
      backgroundColor:'#FFFAF5'
    },
    IconRow:{
      width:'100%',
      height:44,
      alignItems:'center',
      backgroundColor:'#FD841F',
      flexDirection:'row'
    },
    cityText:{
      color:'#FFFFFF',
      fontSize:16,
      fontWeight:'bold',
    },
    addressText:{
      color:'#FFFFFF',
      fontSize:12,
    },
    searchBar:{
      alignItems:'center',
      backgroundColor:'#FD841F',
      width:'100%',
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
    },
    sliderRow:{
      marginTop:5,
      flexDirection:'row',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'space-between',
      alignSelf:'center',
      backgroundColor:'white',
      width:375,
      height:210
    },
    bannerRow:{
      justifyContent:'center',
      alignItems:'center'
    },
    slideImage:{
      width:'65%',
      height:210,
    },
    bannerImage:{
      width:370,
      height:100,
      borderRadius:3,
      marginTop:8
    },
    serachButton:{
      flexDirection:'row',
      height:100,
      flex:1,
      marginBottom:5,
      paddingBottom:50,
      shadowColor: '#FD841F',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    searchIcon:{
      marginTop:21.5,
      marginLeft:10,
      position:'absolute'
    },
    notificationIcon:{
      marginLeft:65,
      marginTop:4
    },
    messageIcon:{
      marginLeft:25,
      marginTop:8
    },
    searchText:{
      width: 370,
      height:40,
      backgroundColor: '#FFFFFF',
      borderRadius:7,
      marginTop:10,
      color :'#000000',
      paddingLeft:30,
      marginBottom:10,
    },
    notificationText:{
      color:'#FFFFFF',
      backgroundColor:'red',
      marginLeft:75,
      position:'absolute',
      borderRadius:999,
      marginTop:0,
      width:20,
      height:20,
      includeFontPadding:false,
      paddingLeft:2,
      paddingTop:2,
      fontWeight:'bold'
    },
    messageText:{
      color:'#FFFFFF',
      backgroundColor:'red',
      marginLeft:35,
      position:'absolute',
      borderRadius:999,
      marginTop:2,
      width:20,
      height:20,
      includeFontPadding:false,
      paddingLeft:2,
      paddingTop:2,
      fontWeight:'bold'
    },
    trendTitleRow:{
      flexDirection:'row'
    },
    trendTitleButton:{
      marginTop:10,
      marginLeft:10
    },
    trendTitle:{
      color:'#3E6D9C',
      fontSize:18,
      fontWeight:'700'
    },
    allButton:{
      marginLeft:180,
      marginTop:10,
    },
    allButtonText:{
      color:'#FD841F',
      fontSize:15,
      fontWeight:'700'
    },
    categoryButton:{
      width:110,
      height:110,
      backgroundColor:'white',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    categoryImage:{
      height:80,
      width:80,
      marginTop:10
    },
    categoryRow:{
      flexDirection:'row',
      padding:5,
      alignItems:'center',
      justifyContent:'space-between',
      padding:20
    },
    categoryText:{
      backgroundColor:'#FD841F',
      width:'100%',
      fontSize:14,
      lineHeight:14,
      padding:5,
      textAlign:'center',
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
      color:'white',
      marginTop:8
    }
 })
export default App;