import React, {useState} from 'react';

//dependencies
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CtaButton from './CtaButton';
import SaveButton from './SaveButton';
import themeStyle from '../global/theme.style';

type modalStates = {
  modalVisible: boolean;
};

const NoteModal: React.FC<modalStates> = ({modalVisible}) => {
  const [text, onChangeText] = useState('');

  if (!modalVisible) {
    return null;
  }
  return (
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>New Note</Text>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder={'Type Here...'}
          />
          <SaveButton
            title={'Save Note'}
            onPress={() => {
              console.log('hello');
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
