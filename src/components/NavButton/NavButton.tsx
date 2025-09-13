import React from 'react';
import { GestureResponderEvent, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './NavButtonStyles';

interface NavButtonProps {
    onPress: (event: GestureResponderEvent) => void
}

export default function NavButton({ onPress }: NavButtonProps) {
  return (
    <LinearGradient
      colors={['#b22222', '#f1c40f']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.button}
    >
      <Text 
          onPress={onPress}
          style={styles.text}
      > 
          Go to other screen
      </Text>
    </LinearGradient>
  );
}
