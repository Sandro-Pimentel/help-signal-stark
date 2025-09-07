import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './MainStyles';
import { Logo } from '../components/Logo/Logo';

export function Main() {
  return (
    <View style={styles.container}>
        <Logo />
    </View>
  );
}
