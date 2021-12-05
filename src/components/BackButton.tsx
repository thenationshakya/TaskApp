import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

interface Props{
  title: string;
}

const BackButton: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
   <>
   <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>{title}</Text>
   </TouchableOpacity>
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
export default BackButton;
