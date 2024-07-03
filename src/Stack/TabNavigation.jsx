import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import Home from "../view/Home";
import Perfil from "../view/Perfil";

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let iconSize = 32; // Tamanho dos ícones

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Retorna o ícone com o nome, tamanho e cor especificados
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#9747FF',
        tabBarInactiveTintColor: '#616161',
      })}
    >
      <Tab.Screen name='Home' component={Home} 
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen name='Perfil' component={Perfil} 
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};
