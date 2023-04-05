
 import React, { useEffect, useState } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image, 
   TouchableOpacity
 } from 'react-native';

 import Icon from 'react-native-vector-icons/AntDesign';
 import {AsyncStorage} from 'react-native';

  const Product = (props) => { 
    const [visible,setVisible] = useState(false);
    /*const getFavorites = async () => {
      const a = await AsyncStorage.getItems('favorite');
      console.log(a)
      /*try{ 
       const a = await AsyncStorage.getItems('favorite');
       console.log(a)
      }
      catch(error){
        return [];
      }
    }
    const heartCheck = () => {
      const favorite = getFavorites();
      /*if(!!favorite){
        if(favorite.find(i=>i.id===props.item.item.id)){
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    const set = async () =>{
      await AsyncStorage.setItem('favorite','veriii');
    }

    const[heart,setHeart] = useState(heartCheck());

    const setFavorite = async (data) => {
      try{
        await AsyncStorage.setItem('favorite',data);
        return true;
      }
      catch(error){
        return false;
      }
    }

    useEffect(()=>{
      set();
      getFavorites();
    },[])*/
    
    return(
      <TouchableOpacity onPress={()=>props.navigation.navigate('Detail',id=props.item.id)} style={styles.card}>
        <Image 
          style={styles.image}
          source={{uri: 'http://yonetimpanel.com/admin/uploads/' + props.item.imageUrl}}
        />
        <TouchableOpacity style={styles.favoriteRow} onPress={()=>setVisible(!visible)}>
          <Icon style={styles.favorite} name = {visible ? "heart" : "hearto"} size={22} color= {visible ? 'rgb(229,50,45)' : 'gray'}/>
        </TouchableOpacity> 
        <View style= {styles.cardBottom}> 
          <Text style={styles.productNameText}>{props.item.title}</Text>  
          <Text style={styles.companyNameText}>{props.item.companyName}</Text>     
          <View style={styles.pointRow}>  
            <View style={styles.starRow}>  
              <Icon size = {12} name = "star" color={'orange'}/> 
              <Text style={styles.pointText}>{props.item.point}</Text> 
            </View>
            <Text style={{marginRight:10,fontSize:16,fontWeight:'600',color:'#3669C9'}}>{props.item.money}₺</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    card:{
      minHeight:242,
      minWidth:180,
      maxHeight:242,
      maxWidth:180,
      backgroundColor:'white',
      marginBottom:15,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,

      paddingTop:5,
      marginLeft:11
    },
    cardBottom:{
      width:'100%',
      height:90,
      backgroundColor:'white',
      justifyContent:'flex-end',
      borderRadius:10,
      paddingLeft:6
    },
    companyNameText:{
      color:'#FE3A30',
      fontSize:12,
      lineHeight:16,
      fontFamily:'DMSans-Bold',
    },
    productNameText:{
      fontSize:14,
      lineHeight:18,
      color:'#0C1A30',
      fontFamily:'DMSans-Bold',
      fontWeight:'500'
    },
    priceText:{
      fontSize:12,
      fontWeight:'500',
      marginTop:5,
    },
    pointRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10
    },
    pointText:{
      fontSize:12,
      lineHeight:13,
      fontFamily:'DMSans-Bold',
      marginLeft:5,
      marginRight:5
    },

    favoriteRow:{
      borderRadius:999,
      backgroundColor:'white',
      width:35,
      height:35,
      position:'absolute',
      marginTop:10,
      marginLeft:135,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 10,
      borderWidth:1,
      zIndex: 999, // added zIndex
      borderColor:'#E6E6E6',
      justifyContent:'center',
      alignItems:'center'
    },

    favorite:{
      
    },
    features:{
      width:35,
      height:35,
      marginLeft:5,
      marginBottom:5
    },
    starRow:{
      flexDirection:'row',
      alignItems:'center',
    },
    image:{
      width:140,
      height:140,
      marginLeft:15,
    }
  });
 export default Product;