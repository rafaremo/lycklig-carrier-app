import React, { Component } from 'react';
import {Button} from '@shopify/polaris';

class BikeSettings extends Component {
    render(){
        return (
            <Button onClick={this.props.BikeToggleHandler}>Disable</Button>
        );
    }
}

export default BikeSettings;