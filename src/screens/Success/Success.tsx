import React from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './SuccessStyles';

import NavButton from '../../components/NavButton/NavButton';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo';

export default function Success({ navigation }: any) {
  const navToScreen: (event: GestureResponderEvent) => void = () => {
    navigation.navigate('home');
  }  

  return (
    <LinearGradient
        colors={['#7d0000', '#b22222', '#f1c40f']} 
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 1, y: 1 }}  
        style={styles.container}
    >
        <View style={styles.card}>
            <Title text='Obrigado por preencher os dados, a ajuda está a caminho!' />
            <Logo />
            <Title text='PS: Indústrias STARK' />
        </View>

        <NavButton title='Voltar ao início' onPress={navToScreen}/>
    </LinearGradient>
  );
}
