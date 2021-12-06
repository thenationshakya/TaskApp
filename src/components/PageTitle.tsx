import React from 'react';

//dependencies
import {Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};
const styles = StyleSheet.create({
  title: {
    color: '#B471DA',
    fontSize: 22,
  },
});
export default PageTitle;
