import * as React from 'react';
import { View, Text } from 'react-native';


export default function SettingsScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
        onPress={()=>{navigation.navigate('Home')}}
        >Settings!</Text>
      </View>
    );
  }