import React from 'react';

//dependencies
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ButtonProps = {
  onPress: () => void;
};

const AddIcon: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <LinearGradient
      colors={['#B471DA', '#D390AF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name={'post-add'} style={styles.iconStyle} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    right: 20,
    bottom: 60,
    zIndex: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  iconStyle: {
    fontSize: 28,
    color: '#fff',
  },
});

export default AddIcon;
