import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

//packages
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//global
import theme from '../global/theme.style';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const SaveButton: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        style={styles.button}
        colors={[theme.PINK, theme.GREEN]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.btnText}>
          {title} <FontAwesome5 name={'chevron-right'} size={12} color="#fff" />{' '}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    alignItems: 'center',
  },
  container: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
});
export default SaveButton;
