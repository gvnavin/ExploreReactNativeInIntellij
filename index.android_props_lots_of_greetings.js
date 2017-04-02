import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Welcome Rexxar' />
                <Greeting name='Hi Jaina' />
                <Greeting name='Welcome Valeera' />
            </View>
        );
    }
}

AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => LotsOfGreetings);