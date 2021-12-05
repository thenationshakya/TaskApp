import React from 'react';
import { Text, StyleSheet} from 'react-native';

interface Props{
 title: string;
}

const Notes: React.FC<Props> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};
const styles = StyleSheet.create({
  title: {
   color: 'white',
   fontSize: 25,
  },
});
export default Notes;
