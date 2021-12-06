import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Logo: React.FC<any> = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/backblur.png')}
        style={styles.logoBase}
      />
      <Image source={require('../assets/logobase.png')} />
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
