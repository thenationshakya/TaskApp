import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../components/Button';
import Logo from '../components/Logo';

const HomeScreen: React.FC<any> = ({navigation}) => {
  return (
    <LinearGradient style={styles.home} colors={['#4C2566', '#220B43']}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.description}>
          Add quick notes and check lists for maximum productivity
        </Text>
        <Button
          title="Quick Notes"
          onPress={() => navigation.navigate('Notes')}
        />
        <Button
          title="Check List"
          onPress={() => navigation.navigate('Check List')}
        />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 300,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Tangerine-Regular',
    fontSize: 60,
    color: 'white',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
});
export default HomeScreen;
