import React from 'react';
import {TouchableOpacity, Text, View, FlatList, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//packages
import FontAwesome5 from 'react-native-vector-icons/AntDesign';

type Props = {
  id: number;
  note?: string;
};

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

const NoteList: React.FC<Props> = () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
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
              <Text numberOfLines={3} ellipsizeMode="tail">
                {item.note}
              </Text>
              <View style={styles.ctaBtns}>
                <TouchableOpacity style={styles.more}>
                  <Text>more..</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.close}>
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
});

export default NoteList;
