import { StyleSheet } from "react-native"
import { color,Text } from "../../../assets/styles/styles"
export const styles = StyleSheet.create({
    Body:{
        flex:1,
        flexGrow :1,
        backgroundColor:'#FFFFFF'
    },
  
    Container:{
      width:'90%',
      alignSelf:'center',
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

    shareButton:{
        marginLeft:120
    },

    Line:{
        width:'100%',
        height:1,
    },

    Image:{
        width:'90%',
        height:320,
        marginTop:20,
        alignSelf:'center',
        borderRadius:10
    },

    productTitle:{
        fontSize:24,
        lineHeight:32,
        color:'#0C1A30',
        fontFamily:'DMSans-Medium'
    },

    companyTitle:{
        fontSize:16,
        lineHeight:20,
        color:'#3669C9',
        fontFamily:'DMSans-Medium'
    },

    starRow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:11
    },

    pointText:{
        fontSize:14,
        lineHeight:18,
        fontFamily:'DMSans-Bold',
        marginLeft:5,
        marginRight:5
    },

    colorTitle:{
        fontSize:16,
        lineHeight:16,
        color:'#0C1A30',
        fontFamily:'DMSans-Medium',
        marginTop:10
    },

    colorButton:{
        borderColor:'#64646D',
        padding:5,
        borderWidth:1,
        borderRadius:999,
        marginLeft:10
    },
    colorRow:{
        borderRadius:999,
        backgroundColor:'#0100C8',
        width:40,
        height:40
    },

    Line:{
        width:'100%',
        height:1,
        backgroundColor:'#EDEDED',
        marginTop:15
    },
    productElement:{
        width:'100%',
        height:50,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },

    expBody:{
        fontSize:14,
        lineHeight:14,
        color:'#0C1A30',
        fontFamily:'DMSans-Medium',
        marginTop:10
    },

    propertyRow:{
        minHeight:50,
        width:'99%',
        borderRadius:10,
        padding:10,
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

        backgroundColor:'white',
        marginBottom:5
    },

    favoriteButton:{
        backgroundColor:color.blue,
        marginTop:20,
        alignSelf:'center',
        width:140,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        flexDirection:'row'
    },

    favoriteButtonText:{
        fontSize:14,
        lineHeight:14,
        color:'white',
        fontFamily:Text.medium
    }
})