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
import Bell from '../../../assets/images/icon/bell.svg'
import Search from '../../../assets/images/icon/search.svg'
import Banner from '../../../assets/images/banner/svg/banner2.svg'
import Small from '../../../assets/images/icon/small.svg'
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
    dispatch(actions.getAllApport());*/
    dispatch(actions.getAllBanner());
    dispatch(actions.getAllNotification());
    /*console.log(oneP);
    console.log(apport);*/
    console.log(banner);
    console.log(notification);
  },[])
  const [visible,setVisible] = useState(false);

  const _renderItem = (item) =>{
    return <Product navigation={props.navigation} item={item}/>;
  }

  return(
    <View style = { styles.Body}> 
      <View style={styles.Container}>
        <SafeAreaView  style={styles.area}>
          <Text style={styles.title}>Motosiklet Tanıtım</Text>
        </SafeAreaView>
        <View style={styles.tabBar}>
          <Image 
            style={{width:250,height:60,marginLeft:40}}
            source={require('../../../assets/images/banner/png/banner6.jpg')}
          />
          <TouchableOpacity onPress={()=>setVisible(true)} style={styles.menuRow}>
            <Bell style={styles.white}/>
          </TouchableOpacity> 
        </View> 
        <ScrollView style={styles.bannerRow} horizontal={true} showsHorizontalScrollIndicator={false}>
           <Image 
                style={styles.banner}
               
              />
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
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","Motor")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/motor.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Motosiklet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","Lastik")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/lastik.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Lastik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","yedek-parca")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/lamba.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Yedek Parça</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","kask")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/kask.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Kask</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","mont")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/mont.jpg')}
              />
            </View>
            <Text style={styles.categoryName}>Mont</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={()=>props.navigation.navigate("Category","eldiven")}>
            <View style={styles.categoryItem}>
              <Image 
                style={styles.categoryImage}
                source={require('../../../assets/images/Product/eldiven.jpg')}
              />
            </View> 
            <Text style={styles.categoryName}>Eldiven</Text>  
          </TouchableOpacity>  
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
        renderItem={({item}) => <Product navigation={props.navigation} item={item} />} 
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
          {notification.map(item=> 
          <>
            <View style={styles.notificationRow}>
              <Bell style={styles.bell}/>
              <View style={styles.textRow}>
                <Text style={styles.modalTitle}>{item.title}</Text>
                <Text style={{paddingRight:20}}>{item.body}</Text>
              </View>
            </View>
            <View style={styles.modalLine}></View>
          </> )
         }
         
        </ScrollView>
      </Modal>
      </View>
  )
 }
export default App;