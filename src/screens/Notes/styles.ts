import {StyleSheet} from 'react-native';
import theme from '../../global/theme.style';

export default StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.PURPLE,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
});
