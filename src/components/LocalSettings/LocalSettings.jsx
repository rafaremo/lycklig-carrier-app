import React, { Component } from 'react';
import {Button} from '@shopify/polaris';

class LocalSettings extends Component {
    render(){
        return (
            <Button onClick={this.props.LocalToggleHandler}>Disable</Button>
        );
    }
}

export default LocalSettings;