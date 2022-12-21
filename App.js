import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from './src/component/ProductCard';
import data from './src/services/products';
  const App = () => {
  const [clicked,setClicked] = useState(false);
  return(
    <View style = { styles.Body}> 
      <View style= {styles.IconRow}> 
        <View style= {{flexDirection:'row',height:60}}>
          <Ionicons name= "arrow-back-circle" size= {30} style={{marginLeft:15,marginTop:12}} color={'white'}/>
          <Text style= {styles.addressText}>Geri Dön</Text>
        </View> 
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style = {styles.trendTitleRow}>
        <TouchableOpacity style={{flexDirection:'row',height:'100%',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:10}}>         
          <Icon name="filter" size= {18} color={'rgb(66,39,116)'}/>
          <Text style={{marginLeft:5}}>Filtrele</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',height:'100%',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:10}}>  
          <Icon name="arrow-up" size= {18} color={'rgb(66,39,116)'}/>      
          <Icon name="arrow-down" size= {18} color={'rgb(66,39,116)'}/>
          <Text style={{marginLeft:5,color:'black'}}>Sırala</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
      </View>
      <FlatList 
        data={data}
        renderItem={Product}
        numColumns={2}
        key={item => item.id}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listView}
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
    listView: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    IconRow:{
      width:'100%',
      height:44,
      backgroundColor:'rgb(66,39,116)',
    },
    cityText:{
      color:'#FFFFFF',
      fontSize:16,
      fontWeight:'bold',
    },
    addressText:{
      color:'#FFFFFF',
      fontWeight:'700',
      fontSize:14,
      lineHeight:14,
      marginLeft:10,
      alignSelf:'center',
      textAlign:'center'
    },
    searchBar:{
      alignItems:'center',
      backgroundColor:'rgb(66,39,116)',
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
      flexDirection:'row',
      borderColor:'rgb(66,39,116)',
      borderWidth:1,
      backgroundColor:'#FFFAF5',
      width:'98%',
      height:50,
      borderRadius:10,
      alignSelf:'center',
      justifyContent:'space-between',
      marginTop:10
    },

    verticalLine:{
      borderColor:'rgb(66,39,116)',
      width:10,
      height:'100%',
      justifyContent:'center',
      alignSelf:'center',
      marginLeft:20
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
      color:'rgb(229,50,45)',
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