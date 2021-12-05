import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../components/Logo';
import Button from '../../components/Button';

import styles from './styles';

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
          onPress={() => navigation.navigate('CheckList')}
        />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
