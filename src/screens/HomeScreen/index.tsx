import React from 'react';
import styles from './styles';
import {Props} from './types';

//dependencies
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//components
import Logo from '../../components/Logo';
import CtaButton from '../../components/CtaButton';

const HomeScreen: React.FC<Props> = ({navigation}) => {
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
        <CtaButton
          title="Quick Notes"
          onPress={() => navigation.navigate('Notes')}
        />
        <CtaButton
          title="Check List"
          onPress={() => navigation.navigate('CheckList')}
        />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
