import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./bottomStack/bottomTab";
import { Login } from "../pages";

const Stack=createNativeStackNavigator();
const IndexNavigation=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen component={Login} name="Login" options={{
                headerShown:false
            }}/>
            <Stack.Screen component={BottomTab} name="BottomTab" options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    )
}

export default IndexNavigation;