import React, {useState} from 'react';
import styles from './styles';
import {View} from 'react-native';

//components
import AddIcon from '../../components/AddIcon';
import Counter from '../../components/Counter';
import NoteList from '../../components/NoteList';
import PageTitle from '../../components/PageTitle';
import BackButton from '../../components/BackButton';
import NoteModal from '../../components/NoteModal';

//count

const Notes: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteCount, setNoteCount] = useState(0);
  return (
    <View style={styles.home}>
      <NoteModal modalVisible={modalVisible} setModal={setModalVisible} />
      <BackButton title={'Go Back'} />
      <View style={styles.title}>
        <PageTitle title={'Quick Notes'} />
        <Counter count={noteCount} />
      </View>
      <NoteList setCount={cnt => setNoteCount(cnt)} />
      <AddIcon
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
};

export default Notes;
