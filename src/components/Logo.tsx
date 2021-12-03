import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import logoBase from '../assets/backblur.png';
import logoImage from '../assets/logobase.png';

const Logo: React.FC<any> = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logoBase} style={styles.logoBase} />
      <Image source={logoImage} style={styles.logoImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoBase: {
    position: 'absolute',
    top: -150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Logo;
