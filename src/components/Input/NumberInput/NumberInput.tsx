import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from '../InputStyles';

interface InputProps {
    text: string
    placeholder: string
    ref: React.Ref<TextInput>
    onChangeText: ((text: string) => void) | undefined
}

export default function NumberInput({ text, placeholder, ref, onChangeText }: InputProps) {
  return (
    <View style={styles.group}>
        <Text style={styles.text}> {text} </Text>
        <TextInput 
          placeholder={placeholder}
          keyboardType='number-pad'
          style={styles.inputText}
          ref={ref}
          onChangeText={onChangeText}
        />
    </View>
  );
}
