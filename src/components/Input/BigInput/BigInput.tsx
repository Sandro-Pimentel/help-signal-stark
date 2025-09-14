import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from '../InputStyles';

interface InputProps {
    text: string
    placeholder: string
    ref: React.Ref<TextInput>
    onChangeText: ((text: string) => void) | undefined
}

export default function BigInput({ text, placeholder, ref, onChangeText }: InputProps) {
  return (
    <View style={styles.group}>
        <Text style={styles.text}> {text} </Text>
        <TextInput 
          placeholder={placeholder}
          multiline={true}
          numberOfLines={5}
          style={{...styles.inputText, fontSize: 17}}
          ref={ref}
          onChangeText={onChangeText}
        />
    </View>
  );
}
