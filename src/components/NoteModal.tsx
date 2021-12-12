import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

//components
import SaveButton from './SaveButton';

//global
import themeStyle from '../global/theme.style';

type modalStates = {
  modalVisible: boolean;
  setModal: any;
};

const NoteModal: React.FC<modalStates> = ({modalVisible, setModal}) => {
  const [text, onChangeText] = useState('');

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModal(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            setModal(false);
          }}>
          <TouchableWithoutFeedback>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}>New Note</Text>
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  placeholder={'Type Here...'}
                  multiline={true}
                />
                <SaveButton
                  title={'Save Note'}
                  onPress={() => {
                    console.log('hello');
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  centeredView: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    width: '100%',
    height: '75%',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  title: {
    color: themeStyle.PINK,
    fontSize: 24,
    paddingBottom: 10,
    borderBottomColor: themeStyle.PINK,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default NoteModal;
