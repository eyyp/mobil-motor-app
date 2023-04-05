import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Body:{
      flex:1,
      flexGrow :1,
      backgroundColor:'#FFFFFF'
    },

    Container:{
      width:'92%',
      alignSelf:'center',
      justifyContent:'space-between',
    },

    listView: {
      justifyContent: 'space-between',
      paddingBottom:10,
      paddingTop:20,
    },

    title:{
      fontSize:16,
      lineHeight:23,
      fontFamily:'DMSans-Bold',
      color:'#000000',
      marginLeft:120
    },

    area:{
      width:'100%',
      height:55,
      alignItems:'center',
      flexDirection:'row',
      paddingRight:25,
      paddingTop:16
    },

    tabBar:{
      justifyContent:'space-between',
      width:'100%',
      flexDirection:'row'
    },

    input:{
      backgroundColor:'white',
      width:300,
      height:44,
      borderWidth:1,
      borderColor:'#E0E0E0',
      borderRadius:8,
      paddingLeft:45,
      fontSize:16
    },

    search:{
      position:'absolute', 
      marginLeft:10,
      marginTop:10,
      color:'#B2B2B2'
    },

    banner:{
      marginRight:15
    },

    categoryItem:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,

      backgroundColor:'white',
      width:72,
      height:72,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
    },

    categoryContainer:{
      marginRight:37,
      marginLeft:1,
      marginVertical:5
    },

    bannerRow:{
      paddingVertical:20
    },

    categoryTitleRow:{
      flexDirection:'row',
      marginBottom:14,
      justifyContent:'space-between'
    },

    productTitleRow:{
      flexDirection:'row',
      marginTop:50,
      marginBottom:14,
      justifyContent:'space-between'
    },

    categoryTitle:{
      fontSize:16,
      lineHeight:25,
      color:'#0C1A30',
      fontFamily:'DMSans-Regular'
    },

    jC_C:{justifyContent:'center'},

    allCategoryText:{
      fontSize:12,
      lineHeight:22,
      color:'#3669C9',
      fontFamily:'DMSans-Medium',
      textAlign:'center'
    },

    categoryImage:{
      width:50,
      height:50
    },

    categoryName:{
      fontSize:14,
      lineHeight:22,
      color:'#0C1A30',
      alignSelf:'center'
    },

    categoryCard:{
      alignItems:'center',
      marginRight:15,
      marginLeft:5,
      marginTop:2
    },

    menuRow:{
      width:44,
      height:44,
      backgroundColor:'#E9E9E9',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    modalBody:{
      backgroundColor:'#F7F6FB',
      width:'100%',
      height:'52%',
      alignSelf:'center',
      marginTop:'auto',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    
    modal:{
      width:'100%',
      height:'100%'
    },

    tabRow:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      alignSelf:'center'
    },

    modalContainer:{
      width:'90%',
      marginTop:20,
      alignSelf:'center'
    },

    modalLine:{
      width:'100%',
      height:1,
      backgroundColor:'#EDEDED',
    },

    Row:{
      flexDirection:'row'
    },

    buttonRow:{
      flexDirection:'row',
      marginTop:20
    },

    modalTitle:{
      fontSize:16,
      lineHeight:24,
      color:'#0C1A30',
      fontFamily:'DMSans-Medium'
    },

    modalText:{
      fontSize:15,
      lineHeight:20,
      color:'#0C1A30',
      fontFamily:'DMSans-Medium',
    },

    searchText:{
      marginLeft:30,
      fontSize:14,
      lineHeight:20,
      color:'#0C1A30',
      fontFamily:'DMSans-Medium'
    },

    mL_30:{
      marginLeft:30
    },

    selectView:{
      backgroundColor:'#3669C9',
      width:35,
      height:5,
      borderRadius:10,
      marginLeft:5,
      marginTop:8
    },
    minInput:{
      width:150,
      height:50,
      backgroundColor:'white',
      borderRadius:10,
      paddingLeft:15
    },

    maxInput:{
      width:150,
      height:50,
      backgroundColor:'white',
      borderRadius:10,
      paddingLeft:15,
      marginLeft:20
    },

    modalSubTitle:{
      fontSize:14,
      lineHeight:18,
      color:'#0C1A30',
      fontFamily:'DMSans-Medium',
    },
    modalElementRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10,
      marginTop:20
    }
 })