import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import BackButton from '../components/BackButton';
import Counter from '../components/Counter';
import NoteList from '../components/NoteList';
import PageTitle from '../components/PageTitle';

const Notes: React.FC<any> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <BackButton title={'Go Back'} />
      <View>
        <PageTitle title={'Quick Notes'} />
        <Counter />
      </View>
      <NoteList />
      {/* <AddIcon /> */}
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
export default Notes;
