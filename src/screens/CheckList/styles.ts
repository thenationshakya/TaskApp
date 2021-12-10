import {StyleSheet} from 'react-native';
import themeStyle from '../../global/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.PURPLE,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    color: '#fff',
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 32,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  addButton: {
    alignSelf: 'flex-start',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  addButtonText: {
    color: '#fff',
  },
  checkListContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'rgba(256,256,256,0.4)',
  },
});
