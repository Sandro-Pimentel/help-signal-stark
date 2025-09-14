import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './NavButtonStyles';

interface NavButtonProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
}

export default function NavButton({ title, onPress }: NavButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#b22222', '#f1c40f']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Text 
            style={styles.text}
        > 
          { title }
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
