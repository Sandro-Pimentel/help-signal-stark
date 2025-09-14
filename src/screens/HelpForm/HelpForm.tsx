import React, { useRef, useState } from 'react';
import { View, GestureResponderEvent, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './HelpFormStyles';

import Input from '../../components/Input/Input/Input';
import NavButton from '../../components/NavButton/NavButton';
import Title from '../../components/Title/Title';
import NumberInput from '../../components/Input/NumberInput/NumberInput';
import BigInput from '../../components/Input/BigInput/BigInput';

export default function HelpForm({ navigation }: any) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [local, setLocal] = useState('');
  const [reason, setReason] = useState('');

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const localRef = useRef(null);
  const reasonRef = useRef(null);
  
  const navToScreen: (event: GestureResponderEvent) => void = () => {
    if(name !== '' && phone !== '' && local !== '' && reason !== '') {
      navigation.navigate('success');
    } else {
      Alert.alert("Preencha todos os campos");
    }
  }

  return (
    <LinearGradient 
      colors={['#7d0000', '#b22222', '#f1c40f']} 
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 1, y: 1 }}  
      style={styles.form}
    >
      <View style={styles.card}>
        <Title text='FORMULÁRIO'/>
        <Input text='Nome:' placeholder='Nome' ref={nameRef} onChangeText={setName}/>
        <NumberInput text='Telefone:' placeholder='Telefone' ref={phoneRef} onChangeText={setPhone}/>
        <Input text='Localização:' placeholder='Localização' ref={localRef} onChangeText={setLocal}/>
        <BigInput text='Motivo:' placeholder='Motivo' ref={reasonRef} onChangeText={setReason}/>
        <NavButton title='Enviar dados' onPress={navToScreen}/>
      </View>
    </LinearGradient>
  );
}

