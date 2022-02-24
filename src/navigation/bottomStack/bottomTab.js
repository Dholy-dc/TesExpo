import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStack,AccountStack,GalleryStack} from '../navStack'

const Stack=createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeStack} name="Home"/>
      <Stack.Screen component={GalleryStack} name="Gallery" />
      <Stack.Screen component={AccountStack} name="Account" />
    </Stack.Navigator>
  )
}

export default BottomTab;