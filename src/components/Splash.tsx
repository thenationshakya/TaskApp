import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';

const Splash: React.FC<any> = () => {
  return (
    <View style={styles.splash}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 100,
  },
});
export default Splash;
