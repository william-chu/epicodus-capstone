import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // General App Styles Go Here
  gradient: {
    flex: 1,
  },
  containerFluid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  headerImage: {
    width: 80,
    height: 80,
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textLeft: {
    textAlign: 'left',
  },
  redText: {
    color: 'red'
  },
  h1: {
    fontSize: 20,
    color: '#4A4A4A',
    textAlign: 'center',
    fontFamily: 'Oswald Regular',
    marginBottom: 10,
    alignSelf: 'center',
  },
  h2: {
    fontSize: 22,
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  h3: {
    fontSize: 18,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  h4: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  formInput: {
    marginBottom: 5,
    height: 25,
    width: 250,
    padding: 5,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#4A4A4A',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  btn: {
    color: '#FFF',
    fontSize: 12,
    backgroundColor: '#4A4A4A',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnPurple: {
    color: '#FFF',
    backgroundColor: '#6F62AB',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    alignSelf: 'center',
  }
});
