import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign'
import Metarial from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../assets/images/icon/Home.svg'
import Heart from '../assets/images/icon/Heart.svg'
import ActiveHeart from '../assets/images/icon/ActiveHeart.svg'
import ActiveHome from '../assets/images/icon/ActiveHome.svg'
import App from '../features/Home/containers';
import Apport from '../features/Apport/containers'
import SearchProduct from '../features/Search/Search';
import ProductDetail from '../features/Product/containers';
import Favorites from '../features/Favorite/containers';
import Category from '../features/Category/containers';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {

    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStack.Screen name="Home" component={App} />
        <HomeStack.Screen name="Detail" component={ProductDetail} />
        <HomeStack.Screen name="Category" component={Category} />
      </HomeStack.Navigator>
    );
  }

  const SearchStack = createNativeStackNavigator();


function SearchStackScreen({ navigation }) {

    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStack.Screen name="Search" component={SearchProduct} />
      </HomeStack.Navigator>
    );
  }

  function ApportStackScreen({ navigation }) {

    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStack.Screen name="Apport" component={Apport} />
      </HomeStack.Navigator>
    );
  }

  function FavoriteStackScreen({ navigation }) {

    return (
      <HomeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStack.Screen name="Favorite" component={Favorites} />
      </HomeStack.Navigator>
    );
  }


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: 'white',
          tabBarActiveTintColor: '#3669C9',
          tabBarInactiveTintColor: '#0C1A30',
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="Anasayfa" component={HomeStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <ActiveHome/>
              : <Home/>; 
          }
        }}/>
        <Tab.Screen name="Arama" component={SearchStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <Icon name="search1" size={25} color="#3669C9"/>
              : <Icon name="search1" size={25} color="#0C1A30"/>; 
          }
        }}/>
        <Tab.Screen name="Fırsatlar" component={ApportStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <Metarial name="ticket-percent" size={25} color="#3669C9"/>
              : <Metarial name="ticket-percent-outline" size={25} color="#0C1A30"/>; 
          }
        }}/>
        <Tab.Screen name="Favorilerim" component={FavoriteStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <ActiveHeart/>
              : <Heart/>; 
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
  );
}
export default MyTabs;