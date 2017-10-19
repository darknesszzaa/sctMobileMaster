import React from "react";
import { AppRegistry, Image, TouchableOpacity, Alert } from "react-native";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import styles from "./styles";
const routes = [
  {
    nameIcon:"home",
    data:"Home"
  },{ 
    nameIcon:"settings",
    data:"Setting"
  },{ 
    nameIcon:"power",
    data:"logout"
  },
];

const background = require("../../../images/smart_contract_logo_banner.png");
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };

  drawAction(data) {
    if(data=="logout"){
      Alert.alert(
        'Are you sure to exit','',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => 
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Login" })]
            })
          ) },
        ],
        { cancelable: false }
      )
      
      
    }else{
    this.props.navigation.navigate(data)
    }
 }

  render() {
    return (
      <Container>
        <Content>
          <Image
          source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image
                square
                style={{ height: 100, width: 200 }}
                source={background}
              />
            </TouchableOpacity>
          </Image>
          <List style={styles.container}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.drawAction(data.data)}
                >
                  <Icon name={data.nameIcon} />
                  <Text style={styles.text}>{data.data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
