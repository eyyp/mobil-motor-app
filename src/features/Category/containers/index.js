import React, {useState,useEffect} from 'react';
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
import { actions } from '../../../store/actions';
import filter from '../../../lib/filter'

import Ionicons from 'react-native-vector-icons/Entypo'
import Product from '../../../component/ProductCard'
import Search from '../../../assets/images/icon/search.svg'
import Left from '../../../assets/images/icon/left.svg'
import Small from '../../../assets/images/icon/small.svg'
import NonCheck from '../../../assets/images/icon/NonCheck.svg'
import Check from '../../../assets/images/icon/check.svg'
import Tick from '../../../assets/images/icon/tick.svg'
import { styles } from './style';

  const Category = (props) => {

    const [clicked,setClicked] = useState(false);
    const [visible,setVisible] = useState(false);
    const [modalSelect,setModalSelect] = useState(false);
    const [search,setSearch] = useState([]);
    const reducer = useSelector(state=>state.categoryProduct);
    const {categoryP} = reducer;
    const dispatch = useDispatch();
    

    const filterKeyword = (keyword) => {
      keyword = keyword.toLowerCase();
      setSearch(filter(categoryP,keyword));
    }

    /*useEffect(()=>{
      console.log(search)
    },[search])*/
    
  useEffect(()=>{
    dispatch(actions.getCategoryProduct(props.param));
    setSearch(categoryP);
  },[])

  return(
    <View style = {styles.Body}> 
      <View style={styles.Container}>
        <SafeAreaView  style={styles.area}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Left /> 
          </TouchableOpacity>
          <Text style={styles.title}>Kategori</Text>
        </SafeAreaView>
        <View style={styles.tabBar}>
          <TextInput style={styles.input} placeholder="Ürün Ara..." placeholderTextColor="#9C9BA4" onChangeText={keyword=>{filterKeyword(keyword)}} />
        
          <TouchableOpacity style={styles.menuRow} onPress={()=>setVisible(true)}>
            <Ionicons name="menu" color={'#000000'} size={37}/>
          </TouchableOpacity> 
          <Search style={styles.search}/> 
        </View>
      </View> 
      <FlatList  
        data={search} 
        renderItem={({item}) => <Product navigation={props.navigation} item={item} />} 
        numColumns={2} 
        key={item => item.id} 
        keyExtractor={item => item.id} 
        contentContainerStyle={styles.listView} 
      />
      <Modal transparent={true} visible={visible} animationType="slide" style={styles.modal}>
        <ScrollView style={styles.modalBody}>
          <View style={styles.modalContainer}>
            <View style={styles.tabRow}>
              <Text style={styles.modalTitle}>Filtreleme ve Sıralama</Text>
              <TouchableOpacity onPress={()=>setVisible(false)}>
                <Small />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={()=>setModalSelect(true)}>
                <Text style={styles.modalText}>Filtrele</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setModalSelect(false)} style={styles.mL_30} >
                <Text style={styles.modalText}>Sırala</Text>
              </TouchableOpacity>
            </View>
            {modalSelect 
            ?  <>
                <View style={[styles.selectView,{marginLeft:modalSelect ? 5 : 77}]}></View>
                <View style={styles.modalLine}></View>
                <Text style={[styles.modalText,{marginTop:15,marginBottom:5}]}>Fiyat Aralığı</Text>
                <View style={styles.Row}>
                  <TextInput style={styles.minInput} placeholder="En Az"/>
                  <TextInput style={styles.maxInput} placeholder="En Fazla"/>
                </View>
                <View style={[styles.modalLine,{marginTop:13}]}></View>
                <Text style={[styles.modalText,{marginTop:15,marginBottom:5}]}>Renkler</Text>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Mavi</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Kırmızı</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Sarı</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Yeşil</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Turuncu</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Beyaz</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalLine}></View>
                <View style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Siyah</Text>
                  <Check />
                </View>
                <View style={styles.modalLine}></View>
              </>
              : <>
                <View style={[styles.selectView,{marginLeft:modalSelect ? 5 : 82}]}></View>
                <View style={styles.modalLine}></View>
                
                <TouchableOpacity style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Fiyata Göre Artan</Text>
                  <Tick/>
                </TouchableOpacity>
                <View style={styles.modalLine}></View>
                <TouchableOpacity style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Fiyata Göre Azalan</Text>
                  <Tick/>
                </TouchableOpacity>
                <View style={styles.modalLine}></View>
                <TouchableOpacity style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Ada Göre Artan</Text>
                  <Tick/>
                </TouchableOpacity>
                <View style={styles.modalLine}></View>
                <TouchableOpacity style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>Ada Göre Azalan</Text>
                  <Tick/>
                </TouchableOpacity>
                <View style={styles.modalLine}></View>
                <TouchableOpacity style={styles.modalElementRow}>
                  <Text style={styles.modalSubTitle}>En Yeniler</Text>
                  <Tick/>
                </TouchableOpacity>
                <View style={styles.modalLine}></View>
                </>}
            <View style={{flexDirection:'row',marginTop:20,width:'100%',justifyContent:'space-between',paddingHorizontal:20}}>
              <TouchableOpacity style={{borderRadius:10,backgroundColor:'#F7F6FB',borderColor:'#0C1A30',borderWidth:1,alignItems:'center',justifyContent:'center',width:150,height:50}}>
                  <Text style={{color:'#0C1A30'}}>Temizle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:10,backgroundColor:'#3669C9',alignItems:'center',justifyContent:'center',width:150,height:50}}>
                  <Text style={{color:'white'}}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}
export default Category;