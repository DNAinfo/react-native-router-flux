import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});

const popToRoot = () => {
  Actions.popTo("root");
}

const popToLogin1 = () => {
  Actions.popTo("loginModal");
}

const popToLogin2 = () => {
  Actions.popTo("loginModal2");
}

export default class extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Login2 page: {this.props.data}</Text>
                <Button onPress={Actions.pop}>Back</Button>
                <Button onPress={popToLogin1}>To Login</Button>
                <Button onPress={popToLogin2}>To Login2</Button>
                <Button onPress={popToRoot}>To Root</Button>
            </View>
        );
    }
}
