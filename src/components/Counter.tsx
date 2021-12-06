import React from 'react';

//dependencies
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../global/theme.style';

type Props = {
  count: number;
};

const Counter: React.FC<Props> = ({count}) => {
  return (
    <>
      <View style={styles.outerCircle}>
        <View style={styles.midCircle}>
          <LinearGradient
            colors={['#B471DA', '#D390AF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.innerCircle}>
            <Text style={styles.counterText}>{count}</Text>
          </LinearGradient>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    backgroundColor: '#DFB7FEAA',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midCircle: {
    backgroundColor: '#DFB7FEA3',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  counterText: {
    color: '#fff',
  },
});

export default Counter;
