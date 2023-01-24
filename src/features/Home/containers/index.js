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

import Product from '../../../component/ProductCard'
import data from '../../../services/products'
import Bell from '../../../assets/images/icon/bell.svg'
import Search from '../../../assets/images/icon/search.svg'
import Banner from '../../../assets/images/banner/svg/banner2.svg'
import Small from '../../../assets/images/icon/small.svg'
import axios from 'axios'
import { actions } from '../../../store/actions'
  const App = (props) => {
    const reducer = useSelector(state=>state.products);
    const oneProduct = useSelector(state=>state.oneProduct);
    const apportR = useSelector(state=>state.apport);
    const bannerR = useSelector(state=>state.banner);
    const notificationR = useSelector(state=>state.notification);
    const {product} = reducer;
    const {oneP} = oneProduct;
    const {apport} = apportR;
    const {banner} = bannerR;
    const {notification} = notificationR;
    const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getAllProduct());
    /*dispatch(actions.getOneProduct(5));
    dispatch(actions.getAllApport());
    dispatch(actions.getAllBanner());
    dispatch(actions.getAllNotification());*/
    console.log(product);
    /*console.log(oneP);
    console.log(apport);
    console.log(banner);
    console.log(notification);*/
  })
  const [visible,setVisible] = useState(false);

  const _renderItem = (item) =>{
    return <Product navigation={props.navigation} item={item}/>;
  }

  return(
    <View style = { styles.Body}> 
      <View style={styles.Container}>
        <SafeAreaView  style={styles.area}>
          <Text style={styles.title}>Aziz Motor</Text>
        </SafeAreaView>
        <View style={styles.tabBar}>
          <TextInput style={styles.input} placeholder="Ürün Ara..." placeholderTextColor="#9C9BA4"/>
          <TouchableOpacity onPress={()=>setVisible(true)} style={styles.menuRow}>
            <Bell style={styles.white}/>
          </TouchableOpacity> 
          <Search style={styles.search}/> 
        </View> 
        <ScrollView style={styles.bannerRow} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Banner style={styles.banner}/> 
          <Banner style={styles.banner}/> 
          <Banner style={styles.banner}/>  
        </ScrollView>  
        <View style={styles.categoryTitleRow}>
          <Text style={styles.categoryTitle}>Kategoriler</Text> 
          <TouchableOpacity style={styles.jC_C}> 
            <Text style={styles.allCategoryText}>Tüm Kategoriler</Text>
          </TouchableOpacity>  
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/motor.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Motosiklet</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/lastik.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Lastik</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/lamba.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Yedek Parça</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/kask.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Kask</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/mont.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Mont</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/eldiven.jpg')}
              />
            </View> 
            <Text style={styles.categoryName}>Eldiven</Text>  
          </View>  
        </ScrollView>  
        <View style={styles.productTitleRow}> 
          <Text style={styles.categoryTitle}>Trenddekiler</Text>
          <TouchableOpacity style={styles.jC_C}>
            <Text style={styles.allCategoryText}>Tüm Ürünler</Text>
          </TouchableOpacity>  
        </View>   
      </View>
      <FlatList  
        data={product} 
        renderItem={({item}) => <Product navigation={props.navigation} item={item}/>} 
        numColumns={2} 
        key={(item) => item.id} 
        keyExtractor={item => item.id} 
        contentContainerStyle={styles.listView} 
      />
      <Modal transparent={true} visible={visible} animationType="slide" style={styles.modal}>
        <View style={styles.tabRow}>
          <Text style={styles.modalTitle}>Bildirimler</Text>
          <TouchableOpacity onPress={()=>setVisible(false)}>
            <Small />
          </TouchableOpacity>
        </View>
        <View style={styles.modalLine}></View>
        <ScrollView style={styles.modalBody}>
          <View style={styles.notificationRow}>
            <Bell style={styles.bell}/>
            <View style={styles.textRow}>
              <Text style={styles.modalTitle}>Title title tltl ögögö glglg</Text>
              <Text>Body asdfas asdfas as sdaf ass sadf asv as dfas v xcsadfas asdf asdf  asdf asdf asdf asdfsadfsdaf asdf asdfsafsdaf asdfsadf asdf sdf sdfsdfsdfasdfasdsdf asdf asdf asd fasdfsadfasdf</Text>
            </View>
          </View>
          <View style={styles.modalLine}></View>
          <View style={{padding:20,width:'100%',flexDirection:'row'}}>
            <Bell style={{color:'black',marginTop:10}}/>
            <View style={{marginLeft:20,minHeight:50}}>
              <Text style={styles.modalTitle}>Title title tltl ögögö glglg</Text>
              <Text>Body asdfas asdfas as sdaf ass sadf asv as dfas v xcsadfas asdf asdf  asdf asdf asdf asdfsadfsdaf asdf asdfsafsdaf asdfsadf asdf sdf sdfsdfsdfasdfasdsdf asdf asdf asd fasdfsadfasdf</Text>
            </View>
          </View>
          <View style={styles.modalLine}></View>
          <View style={{padding:20,width:'100%',flexDirection:'row'}}>
            <Bell style={{color:'black',marginTop:10}}/>
            <View style={{marginLeft:20,minHeight:50}}>
              <Text style={styles.modalTitle}>Title title tltl ögögö glglg</Text>
              <Text>Body asdfas asdfas as sdaf ass sadf asv as dfas v xcsadfas asdf asdf  asdf asdf asdf asdfsadfsdaf asdf asdfsafsdaf asdfsadf asdf sdf sdfsdfsdfasdfasdsdf asdf asdf asd fasdfsadfasdf</Text>
            </View>
          </View>
          <View style={styles.modalLine}></View>
          <View style={{padding:20,width:'100%',flexDirection:'row'}}>
            <Bell style={{color:'black',marginTop:10}}/>
            <View style={{marginLeft:20,minHeight:50}}>
              <Text style={styles.modalTitle}>Title title tltl ögögö glglg</Text>
              <Text>Body asdfas asdfas as sdaf ass sadf asv as dfas v xcsadfas asdf asdf  asdf asdf asdf asdfsadfsdaf asdf asdfsafsdaf asdfsadf asdf sdf sdfsdfsdfasdfasdsdf asdf asdf asd fasdfsadfasdf</Text>
            </View>
          </View>
          <View style={styles.modalLine}></View>
        </ScrollView>
      </Modal>
      </View>
  )
 }
export default App;