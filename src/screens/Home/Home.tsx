import React from 'react';
import { View, Text, Image, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './HomeStyles';

import Logo from '../../components/Logo/Logo';
import NavButton from '../../components/NavButton/NavButton';
import { Title } from '../../components/Title/Title';

export default function Home({ navigation }: any) {
  const navToScreen: (event: GestureResponderEvent) => void = () => {
    navigation.navigate('helpform');
  }

  return (
    <LinearGradient 
      colors={['#7d0000', '#b22222', '#f1c40f']} 
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 1, y: 1 }}  
      style={styles.container}
    >
      <View style={styles.card}>
        <Title text='Help Signal Stark'/>
        <Logo/>
        <NavButton onPress={navToScreen} />
      </View>
    </LinearGradient>
  );
}
