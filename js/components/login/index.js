import React, { Component } from "react";
import { Image, TextInput, TouchableOpacity, Keyboard, Alert } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

const background = require("../../../images/smart_contract_logo_banner.png");

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: '',
      password: ''
    };
    this.renderInput = this.renderInput.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }

 login(){

  var details = {
    // username: 'Blackcats.n',
    // password: '1a2b3c4d',
    username: this.state.username,
    password: this.state.password
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch('http://app.staging.smartcontractthailand.info:9000/oauth2/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Basic c21hcnRjb250cmFjdDohUUFaQFdTQw'
    },
    body: formBody
  }).then((response) => {
    console.log("Get data from server : " + JSON.stringify(response));
    Keyboard.dismiss();
    if(response.ok==true){
      this.props.navigation.navigate("Home", { data : response._bodyInit });
    }else{
        Alert.alert('Invalid Username or Password', alert);
          return {
              type: 'ALERT_USER',
              alert
          }
    }
  }).catch((error) => {
    console.error(error);
  });

 }


  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }
  render() {
    return (
        <View style={styles.containerLogin}>
          <View style={styles.logoContainer}>
            <Image source={background} style={styles.logo}></Image>
            <Text style={styles.title}>The Blockchain Smart Contract Platform</Text>
              </View>
              <View style={styles.formLoginContrainer}>
              <TextInput
                placeholder="Username or Email"
                placeholderTextColor="rgba(0,0,0,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({ username: text })}
                style={styles.input}
                />
                <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(0,0,0,0.7)"
                returnKeyType="go"
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })} 
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity
                  style={styles.btn}
                  
                  onPress={() => this.login()}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
        </View>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "test"
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (username, password) => { dispatch(login(username, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSwag);
