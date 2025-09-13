import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './InputStyles';

interface InputProps {
    text: string
    placeholder: string
}

export default function Input({ text, placeholder }: InputProps) {
  return (
    <View style={styles.group}>
        <Text style={styles.text}> {text} </Text>
        <TextInput 
          placeholder={placeholder}
          style={styles.inputText}
        />
    </View>
  );
}
