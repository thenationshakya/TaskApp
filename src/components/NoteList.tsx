import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  id: number;
  note: string;
}

const DATA = [
  {
    key: uuid.v4(),
    note: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
  {
    key: uuid.v4(),
    note: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
  {
    key: uuid.v4(),
    note: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus pariatur assumenda enim. Praesentium animi dolorum deleniti dolore sequi magni suscipit voluptate incidunt. Tempora culpa reiciendis dolor necessitatibus sed esse reprehenderit.',
  },
];

const NoteList: React.FC<Props> = () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.note}</Text>
              <TouchableOpacity>
                <Text>more..</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name={'close'} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    width: 200,
    color: 'white',
    alignItems: 'center',
  },
});
export default NoteList;
