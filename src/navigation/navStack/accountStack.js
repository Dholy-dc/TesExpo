import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Account} from '../../pages'

const Stack=createNativeStackNavigator();
const AccountStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen component={Account} name="AccountStack" options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack;