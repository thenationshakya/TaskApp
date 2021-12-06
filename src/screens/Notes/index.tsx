import React from 'react';
import styles from './styles';
import {View} from 'react-native';

//components
import AddIcon from '../../components/AddIcon';
import Counter from '../../components/Counter';
import NoteList from '../../components/NoteList';
import PageTitle from '../../components/PageTitle';
import BackButton from '../../components/BackButton';

const Notes: React.FC = () => {
  return (
    <View style={styles.home}>
      <BackButton title={'Go Back'} />
      <View style={styles.title}>
        <PageTitle title={'Quick Notes'} />
        <Counter count={0} />
      </View>
      <NoteList id={0} note={''} />
      <AddIcon />
    </View>
  );
};

export default Notes;
