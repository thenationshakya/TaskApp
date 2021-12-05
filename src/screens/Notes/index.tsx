import React from 'react';
import styles from './styles';

import {View} from 'react-native';

import BackButton from '../../components/BackButton';
import Counter from '../../components/Counter';
import NoteList from '../../components/NoteList';
import PageTitle from '../../components/PageTitle';

const Notes: React.FC = () => {
  return (
    <View style={styles.home}>
      <BackButton title={'Go Back'} />
      <View>
        <PageTitle title={'Quick Notes'} />
        <Counter />
      </View>
      <NoteList id={0} note={''} />
      {/* <AddIcon /> */}
    </View>
  );
};

export default Notes;
