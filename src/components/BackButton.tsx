import React from 'react';

//dependencies
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
}

const BackButton: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient
        colors={['#B471DA', '#D390AF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderBottomRightRadius: 50,
    marginBottom: 16,
  },
  textStyle: {
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default BackButton;
