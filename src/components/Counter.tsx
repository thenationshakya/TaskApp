import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

interface Props{
}

const Counter: React.FC<Props> = () => {
  return (
   <>
   <View>
    <Text>0</Text>
   </View>
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
export default Counter;
