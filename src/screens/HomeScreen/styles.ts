import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 300,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Tangerine-Regular',
    fontSize: 60,
    color: '#fff',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    color: 'rgba(256, 256, 256, 0.6)',
  },
});
