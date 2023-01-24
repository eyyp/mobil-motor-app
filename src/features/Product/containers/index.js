import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Modal
} from 'react-native';
import Left from '../../../assets/images/icon/left.svg'
import Share from '../../../assets/images/icon/share.svg'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { styles } from './styles';
   const ProductDetail = (props) => {
    const[visible,setVisible] = useState(true);
    return(
        <View style = { styles.Body}> 
            <ScrollView style={styles.Container}>
                <SafeAreaView  style={styles.area}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Left /> 
                    </TouchableOpacity>
                    <Text style={styles.title}>Product</Text>
                    <TouchableOpacity style={styles.shareButton}>
                        <Share/>
                    </TouchableOpacity>
                </SafeAreaView>
                <Image 
                    style={styles.Image}
                    source={require('../../../assets/images/Product/example.jpg')}
                />
                <Text style={styles.productTitle}>TMA-2HD Wireless</Text>
                <Text style={styles.companyTitle}>Asus</Text>
                <View style={styles.starRow}>  
                    <Icon size = {15} name = "star" color={'orange'}/> 
                    <Text style={styles.pointText}>4.6</Text> 
                </View>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible(!visible)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Renk Seçenekleri</Text>
                    {   visible
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }            
                </TouchableOpacity>
                <View style={[styles.starRow,{display:visible ? 'flex':'none'}]}>
                    <TouchableOpacity style={styles.colorButton}>
                        <View style={styles.colorRow}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.colorButton,{borderColor:'white'}]}>
                        <View style={styles.colorRow}></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible(!visible)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Ürün Özellikleri</Text>
                    { visible
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }
                      
                </TouchableOpacity>
                <View style={{display:visible ? 'flex':'none'}}>
                    <Text style={styles.expBody}>The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. </Text>
                </View>
                <View style={styles.Line}></View>
                <Text style={styles.colorTitle}>Benzer Ürünler</Text>
                
            </ScrollView> 
        </View>
    )
}
export default ProductDetail;