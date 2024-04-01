import * as React from 'react';
import {View, Text} from 'react-native';

export default function NotificationScreen({navigation}){
return (
    <View>
        <Text
        onPress={()=>navigation.navigate('Settings')}
        >This is notification</Text>
    </View>
)
}