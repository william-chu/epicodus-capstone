import { StyleSheet } from 'react-native';
import { Font } from 'expo';

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
  headerImage: {
    marginTop: 40,
    width: 100,
    height: 100,
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    marginBottom: 20,
  },
  h1: {
    fontSize: 20,
    color: '#4A4A4A',
    textAlign: 'center',
    fontFamily: 'Oswald Regular',
  },
  h2: {
    fontSize: 22,
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 10,
  },
  h3: {
    fontSize: 20,
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 10,
  },
  formInput: {
    marginBottom: 5,
    height: 25,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#4A4A4A',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  btn: {
    color: '#FFF',
    backgroundColor: '#4A4A4A',
    padding: 5,
  }
});
