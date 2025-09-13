import React from 'react';
import { View, Text, GestureResponderEvent } from 'react-native';

import { styles } from './HelpFormStyles';

import Input from '../../components/Input/Input';
import NavButton from '../../components/NavButton/NavButton';
import { Title } from '../../components/Title/Title';

export default function HelpForm({ navigation }: any) {
  const navToScreen: (event: GestureResponderEvent) => void = () => {
    navigation.navigate('helpform');
  }  

  return (
    <View style={styles.form}>
      <Title text='FORMULÁRIO'/>
      <Input text='Nome:' placeholder='Nome'/>
      <Input text='Telefone:' placeholder='Telefone'/>
      <Input text='Localização:' placeholder='Localização'/>
      <Input text='Motivo:' placeholder='Motivo'/>
      <NavButton onPress={navToScreen}/>
    </View>
  );
}

