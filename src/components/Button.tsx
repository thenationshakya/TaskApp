import React from 'react';

//dependencies
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Button: React.FC<any> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={['#FD8D8C', '#E0CC97']}
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
  },
  btnText: {
    textAlign: 'center',
    width: 200,
    color: '#fff',
    alignItems: 'center',
  },
});
export default Button;
