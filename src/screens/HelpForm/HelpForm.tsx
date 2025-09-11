import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './HelpFormStyles';

export default function HelpForm() {
  return (
    <View style={styles.form}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputText}> Nome: </Text>
        <TextInput 
          placeholder='Nome'
          style={styles.inputText}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text> Telefone: </Text>
        <TextInput placeholder='Telefone'/>
      </View>
      <View>
        <Text> Localização: </Text>
        <TextInput placeholder='Localização'/>
      </View>
      <View>
        <Text> Motivo: </Text>
        <TextInput placeholder='Motivo'/>
      </View>
    </View>
  );
}
