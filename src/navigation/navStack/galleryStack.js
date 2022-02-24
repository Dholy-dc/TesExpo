import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Gallery} from '../../pages'

const Stack=createNativeStackNavigator();
const GalleryStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen component={Gallery} name="GalleryStack"
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default GalleryStack;