import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../../store/actions';
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
    const oneProduct = useSelector(state=>state.oneProduct);
    const {oneP} = oneProduct;
    const dispatch = useDispatch();
    const[visible1,setVisible1] = useState(true);
    const[visible2,setVisible2] = useState(true);
    const[visible3,setVisible3] = useState(true);
    const[visible4,setVisible4] = useState(true);
    useEffect(()=>{
        dispatch(actions.getOneProduct(props.route.params));
      },[])
    return(
        <View style = {styles.Body}> 
            <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.area}>
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
                    source={{ uri: 'http://yonetimpanel.com/admin/uploads/' + oneP.imageUrl }}
                />
                <Text style={styles.productTitle}>{oneP.title}</Text>
                <Text style={styles.companyTitle}>{oneP.companyName}</Text>
                <View style={styles.starRow}>  
                    <Icon size = {15} name = "star" color={'orange'}/> 
                    <Text style={styles.pointText}>4.6</Text> 
                </View>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible1(!visible1)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Renk Seçenekleri</Text>
                    {   visible1
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }            
                </TouchableOpacity>
                <ScrollView style={[styles.starRow,{display:visible1 ? 'flex':'none'}]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    { ['#9A208C','#E11299','#FFEAEA','#FFEAEA','#F5C6EC','#7149C6','#FC2947','#FE6244','#FFDEB9','#FFF2CC','#FFD966'].map(item=>                    
                      <TouchableOpacity style={styles.colorButton}>
                            <View style={[styles.colorRow,{backgroundColor:item}]}></View>
                        </TouchableOpacity>)
                    }
                </ScrollView>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible2(!visible2)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Ürün Açıklaması</Text>
                    { visible2
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }
                </TouchableOpacity>
                <View style={{display:visible2 ? 'flex':'none'}}>
                    <Text style={styles.expBody}>{oneP.exp}</Text>
                </View>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible3(!visible3)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Ürün Özellikleri</Text>
                    { visible3
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }
                </TouchableOpacity>
                <View style={{display:visible3 ? 'flex':'none'}}>
                    <Text style={styles.expBody}>{oneP.property}</Text>
                </View>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={()=>setVisible4(!visible4)} style={styles.productElement}>
                    <Text style={styles.colorTitle}>Sıkça sorulan sorular</Text>
                    { visible4
                        ? <MaterialIcon name="keyboard-arrow-down" size={30}/>  
                        : <MaterialIcon name="keyboard-arrow-right" size={30}/>  
                    }
                </TouchableOpacity>
                <View style={{display:visible4 ? 'flex':'none'}}>
                    <Text style={styles.expBody}>{oneP.sss}</Text>
                </View>
                <View style={styles.Line}></View>
            </ScrollView> 
        </View>
    )
}
export default ProductDetail;