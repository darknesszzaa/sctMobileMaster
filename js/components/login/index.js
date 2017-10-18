import React, { Component } from "react";
import { Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
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

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

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

  login() {
    Keyboard.dismiss();
    this.props.navigation.navigate("Home", { name : this.state.username });
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
    form: "test",
    validate
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
