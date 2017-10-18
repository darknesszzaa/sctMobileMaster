
const React = require('react-native');

const { StyleSheet } = React;
export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  pic:{
    marginLeft: 20
  },
  logo: {
    width: 400,
    height: 150
  },
  mt: {
    marginTop: 18,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 10,
  },
  footer: {
    backgroundColor: '#000',
  },header:{
   // backgroundColor: '#000',
  },
  listLeft:{
    backgroundColor: "rgba(0,100,200,0.1)",
    width:20
  },
  profilepic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },
  profilepicWrap:{
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 16
  },
  name:{
    marginTop: 20,
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold'
  },
  pos:{
    fontSize: 18,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  profileHeader:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    // padding: 20,
    // backgroundColor: 'rgba(0,0,0,1)'
  },
  profileContrainer:{
    flex: 1,
  },
};
