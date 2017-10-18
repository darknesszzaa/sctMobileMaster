//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from "./styles";

const background = require("../../../images/smart_contract_logo_banner.png");

// create a component
class Profile extends Component {
    
    render() {
        return (
            <View style={styles.profileContrainer}>
            <View style={styles.profileHeader}>
                <View style={styles.profilepicWrap}>
                 <Image source={background} style={styles.profilepic}></Image>
                 </View>
                 <Text style={styles.name}>Smart Contract Thailand</Text>
                 <Text style={styles.pos}>The Blockchain Smart Contract Platform</Text>
            </View>
            </View>
        );
    }
}

//make this component available to the app
export default Profile;
