import * as React from 'react';
import { View, Text } from 'react-native';
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
        onPress={()=>navigation.navigate('Home')}
        >Home!</Text>
      </View>
    );
  }