import { StyleSheet } from 'react-native';

// General App Styles
export default StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 20,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    marginBottom: 20,
  },
  headerImage: {
    marginTop: 40,
    width: 100,
    height: 100,
  },
});
