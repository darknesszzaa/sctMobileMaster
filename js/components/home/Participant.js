//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";

const participantItem = [
    {
      iconName:"body",
      id:"participantId:9543"
    },{ 
      iconName:"body",
      id:"participantId:9542"
    },{ 
      iconName:"body",
      id:"participantId:9541"
    },
  ];

  const popupDetailItem = [
    {
      name:"ParticipantId",
      data:"participantId:9543"
    },{ 
      name:"First Name",
      data:"John"
    },{ 
      name:"Last Name",
      data:"Snow"
    },
  ];

// create a component
class Participant extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <Content>

                  <PopupDialog
                  dialogTitle={<DialogTitle title="Participant Detail" />}
                  dialogStyle={styles.popupDialog}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
                    >
                     <View>
                <List
                    dataArray={popupDetailItem}
                    renderRow={data => {
              return (
                <ListItem>
                <Left>
                <Text>{data.name}</Text>       
                </Left>
                <Body>
                <Text>{data.data}</Text>
                </Body>
                </ListItem>
              );
            }}
                       />
                     </View>
                  </PopupDialog>

             <List style={styles.list}
            dataArray={participantItem}
            renderRow={data => {
              return (
                <ListItem 
                  icon
                  button
                  onPress={() => this.popupDialog.show()}
                >
                <Left>
                <Icon active name={data.iconName} />    
                </Left>
                <Body>
                <Text>{data.id}</Text>
                </Body>
                </ListItem>
              );
            }}
          />

                </Content>
            </View>
        );
    }
}

//make this component available to the app
export default Participant;
