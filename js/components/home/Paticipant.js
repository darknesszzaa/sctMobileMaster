//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
import styles from "./styles";

// create a component
class Paticipant extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Content>
                <List>
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                    
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                    <ListItem icon>
                    <Left>
                    <Text>Paticipant ID</Text>       
                    </Left>
                    <Body>
                    <Text>e9b1b944-78fa-4340-b016-f0910e2a</Text>
                    </Body>
                    <Right>
                        <Icon active name="archive" />
                    </Right>
                    </ListItem>
                       
                    </List>
                </Content>
            </View>
        );
    }
}

//make this component available to the app
export default Paticipant;
