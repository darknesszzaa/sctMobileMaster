//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";

const transactionItem = [
    {
      time:"05:30:55",
      id:"e9b1b944-78fa-4340-b016-f0910e2a"
    },{ 
      time:"05:12:23",
      id:"2341b944-78fa-4340-b016-f0910e2a"
    },{ 
      time:"05:11:12",
      id:"2341b944-78fa-4340-b016-f0910e2a"
    },{
        time:"05:30:55",
        id:"e9b1b944-78fa-4340-b016-f0910e2a"
      },{ 
        time:"05:12:23",
        id:"2341b944-78fa-4340-b016-f0910e2a"
      },{ 
        time:"05:11:12",
        id:"2341b944-78fa-4340-b016-f0910e2a"
      },
  ];

  const popupDetailItem = [
    {
      name:"TransactionId",
      data:"e9b1b944-78fa-4340-b016-f0910e2a"
    },{ 
      name:"Timestamp",
      data:"2017-10-19T05:30:55.860Z"
    },{ 
      name:"ParticipantId",
      data:"participantId:6281"
    },{ 
      name:"First Name",
      data:"John"
    },{ 
      name:"Last Name",
      data:"Snow"
    },
  ];

// create a component
class Transaction extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <Content>

                  <PopupDialog
                  dialogTitle={<DialogTitle title="Transaction Detail" />}
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
            dataArray={transactionItem}
            renderRow={data => {
              return (
                <ListItem 
                  icon
                  button
                  onPress={() => this.popupDialog.show()}
                >
                <Left>
                <Text>{data.time}</Text>       
                </Left>
                <Body>
                <Text>{data.id}</Text>
                </Body>
                <Right>
                    <Icon active name="mail" />
                </Right>
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
export default Transaction;
