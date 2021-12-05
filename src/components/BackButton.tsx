import React from 'react';

//dependencies
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text} from 'react-native';

interface Props {
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

export default BackButton;
