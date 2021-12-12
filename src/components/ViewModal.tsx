import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import themeStyle from '../global/theme.style';

type modalStates = {
  modalVisible: boolean;
  setModal: any;
  data: string;
};

const ViewModal: React.FC<modalStates> = ({modalVisible, setModal, data}) => {
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
                <Text style={styles.data}>{data}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
  centeredView: {
    position: 'absolute',
    top: 100,
    width: '100%',
    height: '75%',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
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

export default ViewModal;
