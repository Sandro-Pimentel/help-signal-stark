import React from 'react';
import { Image } from 'react-native';

import { styles } from './LogoStyles';

const IronManLogo = require('../../../assets/iron-man-logo.png');

export function Logo() {
  return (
    <>
        <Image 
            source={IronManLogo}
            style={styles.image}
        />
    </>
  );
}
