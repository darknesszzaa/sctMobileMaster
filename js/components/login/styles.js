const React = require('react-native');

const {
  StyleSheet,
  Dimensions
} = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  formLoginContrainer: {
    padding: 20,
},
  containerLogin: {
    flex: 1,
    backgroundColor: '#FFFFFF',
},
buttonText:{
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: '700'
},
  title:{
    color: '#000',
    marginTop: 10,
    width: 200,
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.9,
},
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 400,
    height: 150
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10,
  },
  errorText:{
    color: '#F00'
  },
};