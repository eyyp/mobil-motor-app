import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { styles } from './styles'
import Left from '../../../assets/images/icon/left.svg'

    const Apport = (props) => {

        const dispatch = useDispatch();

        useEffect(()=>{

        },[])

        const [visible,setVisible] = useState(false);

        return(
            <View style = { styles.Body}> 
                <View style={styles.Container}>
                    <SafeAreaView  style={styles.area}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                            <Left /> 
                        </TouchableOpacity>
                        <Text style={styles.title}>Fırsatlar</Text>
                    </SafeAreaView>
                    <ScrollView style={styles.bannerRow} showsVerticalScrollIndicator={false}>
                        <Image 
                            style={{width:350,
                                height:450,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerB.jpeg')}
                        />
                        <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                         <Image 
                            style={{width:350,
                                height:150,marginBottom:5}}
                            source={require('../../../assets/images/banner/png/bannerS1.png')}
                        />
                    </ScrollView>  
                </View>
            </View>
        )
    }

export default Apport;