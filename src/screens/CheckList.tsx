import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';

const CheckList: React.FC<any> = () => {
  return (
    <View style={styles.home}>
      <Text>CheckList Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
export default CheckList;
