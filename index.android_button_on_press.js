import React, {Component} from 'react';
import {AppRegistry, ListView, Text, TouchableHighlight, View} from 'react-native';

class MyButton extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => MyButton);