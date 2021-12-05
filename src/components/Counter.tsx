import React from 'react';

//dependencies
import {Text, View} from 'react-native';

interface Props {}

const Counter: React.FC<Props> = () => {
  return (
    <>
      <View>
        <Text>0</Text>
      </View>
    </>
  );
};

export default Counter;
