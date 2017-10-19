import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Setting from "../setting";
import DrawBar from "../DrawBar";
import Transaction from './Transaction'
import Asset from './Asset';
import Participant from './Participant';
import Profile from './Profile';
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
  Badge
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0} // default screen index
  }
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  switchScreen(index) {
    this.setState({index: index})
 }

  render() {
    let AppComponent = null;
    let titleName = '';
    
          if (this.state.index == 0) {
             AppComponent = Transaction
             titleName = 'Transaction';
          } else if(this.state.index == 1){
             AppComponent = Asset
             titleName = 'Asset';
          } else if(this.state.index == 2){
             AppComponent = Participant
             titleName = 'Participant'
          } else{
             AppComponent = Profile
             titleName = 'Profile'
          }

    console.log(this.props.navigation.state.params.name, "786785786");
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Left>
        

          <Body style={styles.title}>
            <Title>{titleName}</Title>
          </Body>
          <Right>

            <Button
              transparent
            >
              <Icon active name="add" />
            </Button>
          </Right>
          
        </Header>

        
        <AppComponent style={styles.component}/>
     

        <Footer>
          <FooterTab style={styles.footer}>
            <Button
              active= { this.state.index == 0}
              onPress={() => this.switchScreen(0)}
              vertical
              badge
            >
              <Badge><Text>1</Text></Badge>
              <Icon active={ this.state.index == 0} name="shuffle" />
              <Text style={styles.buttonText}>Transaction</Text>
            </Button>
            <Button active={ this.state.index == 1} onPress={() => this.switchScreen(1)}>
              <Icon active={ this.state.index == 1} name="book" />
              <Text style={styles.buttonText}>Asset</Text>
            </Button>
            <Button
              active={ this.state.index == 2}
              onPress={() => this.switchScreen(2)}
              vertical
              badge
            >
              <Badge style={{ backgroundColor: "green" }}>
                <Text>1</Text>
              </Badge>
              <Icon active={ this.state.index == 2} name="body" />
              <Text style={styles.buttonText}>Paticipant</Text>
            </Button>
            <Button active={ this.state.index == 3} onPress={() => this.switchScreen(3)}>
              <Icon active={ this.state.index == 3} name="contact" />
              <Text style={styles.buttonText}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>    
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.auth.username,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    Setting: { screen: Setting }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;

