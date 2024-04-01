import { createStackNavigator } from '@react-navigation/stack';

import StartWith from './StartWith';
import Favorite from './GetStarted';
import Login from './Login';
import SignUp from './SignUp';
import MyTabs from './MyTabs';
const Stack = createStackNavigator(); 
const StackNavigatorPage = ()=>{
    return(
        <Stack.Navigator
            options={{ headerShown: false }}

        >
            <Stack.Screen
            options={{
                headerShown:false,
            }}
            name="StartWith" 
            component={StartWith} /> 

             <Stack.Screen
            options={{
                headerShown:false,
            }}
            name="Favorite" 
            component={Favorite} /> 

             <Stack.Screen
            name="SignUp" 
            component={SignUp}
            options={{
                    headerShown: false,
                    carderStyle:{backgroundColor:'back'}
            }}
             /> 

             <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
                headerShown: false,
                carderStyle:{backgroundColor:'back'}
            }}
             /> 

             <Stack.Screen 
                name='MyTabs'
                component={MyTabs}
                options={{
                    headerShown: false,
                    carderStyle:{backgroundColor:'back'}
                }}
             />
        </Stack.Navigator>
    )
}

export default StackNavigatorPage;