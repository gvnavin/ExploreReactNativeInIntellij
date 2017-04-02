import React, { Component } from 'react';
import { WebView, AppRegistry } from 'react-native';

class MyWeb extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        );
    }
}

AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => MyWeb);