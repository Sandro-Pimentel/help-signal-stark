import React from 'react';
import { Text } from 'react-native';

import { styles } from './TitleStyles';

interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <Text style={styles.text}> { text } </Text>
  );
}
