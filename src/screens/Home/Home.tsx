import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './HomeStyles';

import Logo from '../../components/Logo/Logo';

export default function Home({ navigation }: any) {
  function navToScreen() {
    navigation.navigate('helpform');
  }

  return (
    <View style={styles.container}>
        <Logo />
        <Text 
          onPress={navToScreen}
          style={styles.textButton}
        > 
          Go to other screen
        </Text>
    </View>
  );
}
