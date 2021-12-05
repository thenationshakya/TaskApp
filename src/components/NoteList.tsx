import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
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
            </View>
          );
        }}
      />
    </>
  );
};

export default NoteList;
