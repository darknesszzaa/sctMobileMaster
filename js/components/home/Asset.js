//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import styles from "./styles";

const assetItem = [
    {
      iconName:"archive",
      id:"assetId:8705"
    },{ 
      iconName:"archive",
      id:"assetId:8704"
    },{ 
      iconName:"archive",
      id:"assetId:8703"
    },
  ];

  const popupDetailItem = [
    {
      name:"AssetId",
      data:"assetId:8705"
    },{ 
      name:"Owner",
      data:"participantId:9543"
    },{ 
      name:"Value",
      data:"8000"
    },
  ];

// create a component
class Asset extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <Content>

                  <PopupDialog
                  dialogTitle={<DialogTitle title="Asset Detail" />}
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
            dataArray={assetItem}
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
export default Asset;
