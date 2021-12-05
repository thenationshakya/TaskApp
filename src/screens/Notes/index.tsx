import React from 'react';
import styles from './styles';

//dependencies
import {View} from 'react-native';

//components
import Counter from '../../components/Counter';
import NoteList from '../../components/NoteList';
import PageTitle from '../../components/PageTitle';
import BackButton from '../../components/BackButton';

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
