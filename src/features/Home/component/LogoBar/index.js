import React from 'react';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image
 } from 'react-native';
 
  const LogoBar = () => {
   return(
       <Image 
       style={styles.image}
       source={require('../../../../assets/images/logo.png')}/>
   )
  }

  const styles = StyleSheet.create({
    Body:{

    },
    image:{
        width:50,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:60
    }
  });
 export default LogoBar;