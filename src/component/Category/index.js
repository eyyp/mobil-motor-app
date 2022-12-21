import React, { useEffect } from "react";
import { TouchableOpacity, Image, StyleSheet} from "react-native";

const CategoryCard = (props) =>{
    return(
        <TouchableOpacity style={styles.categoryButton}>
        <Image
        style={styles.categoryImage} 
        source = {props.src}/>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    categoryButton:{
        borderRadius:999,
        width:85,
        height:85,
        margin:5,
        backgroundColor:'white',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
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
        height:65,
        width:65,
        backgroundColor:'white',
        borderRadius:999
    }
})
export default CategoryCard;