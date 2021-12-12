import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, FlatList, StyleSheet} from 'react-native';

//packages
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/AntDesign';
import ViewModal from './ViewModal';

const DATA = [
  {
    key: 0,
    note: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
  {
    key: 1,
    note: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
  {
    key: 2,
    note: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
];

interface Props {
  setCount: (cnt: number) => void;
}

const NoteList: React.FC<Props> = ({setCount}) => {
  const [viewModalVisible, setViewModalVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState('');
  const [noteData, setNoteData] = useState(DATA);

  useEffect(() => {
    setCount(noteData.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleModal(data: string) {
    setModalData(data);
    setViewModalVisible(true);
  }

  const handleClose = (key: number) => {
    var newNoteData = [...noteData];
    newNoteData.splice(key, 1);
    setNoteData(newNoteData);
    setCount(newNoteData.length);
  };

  return (
    <>
      <ViewModal
        modalVisible={viewModalVisible}
        setModal={setViewModalVisible}
        data={modalData}
      />
      <FlatList
        data={noteData}
        key={noteData.length}
        renderItem={({item, index}) => {
          var itemKey = item.key;
          var gradientColors;

          if (itemKey % 2 === 0) {
            gradientColors = ['#E4D195', '#FA918D'];
          } else {
            gradientColors = ['#D2B0FC', '#2AACA0'];
          }
          return (
            <LinearGradient
              colors={gradientColors}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.container}>
              <Text
                style={styles.noteExcerpt}
                numberOfLines={3}
                ellipsizeMode="tail">
                {item.note}
              </Text>
              <View style={styles.ctaBtns}>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => handleModal(item.note)}>
                  <Text style={styles.btnText}>more..</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => handleClose(index)}>
                  <FontAwesome5 name={'close'} style={styles.closeIcon} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  ctaBtns: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    alignItems: 'center',
  },
  more: {
    backgroundColor: 'rgba(256,256,256,0.3)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 30,
  },
  close: {
    backgroundColor: 'rgba(256,256,256,0.3)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 8,
  },
  closeIcon: {
    color: 'red',
  },
  noteExcerpt: {
    color: 'black',
  },
  btnText: {
    color: 'black',
    fontSize: 14,
  },
});

export default NoteList;
