import React, { Component } from 'react';
import {
    Page,
    Card,
    Heading,
    Layout,
    Button
} from '@shopify/polaris';

import StoreSettings from './components/StoreSettings/StoreSettings';
import BikeSettings from "./components/BikeSettings/BikeSettings";
import LocalSettings from "./components/LocalSettings/LocalSettings";

class App extends Component {
    state = {
        bikeEnabled: false,
        localFulfillEnabled: false
    };

    bikeToggleHandler = () => {
        console.log('Save Bike Change to DB');
        this.setState({
            bikeEnabled: !this.state.bikeEnabled
        })
    };

    localToggleHandler = () => {
        console.log('Save Local Fulfill Change to DB');
        this.setState({
            localFulfillEnabled: !this.state.localFulfillEnabled
        })
    };

    render() {
        let bikeSection = this.state.bikeEnabled ? (
                <BikeSettings BikeToggleHandler={this.bikeToggleHandler}/>
            ) : (
                <Layout>
                    <Layout.Section>
                        <Heading>Bike Fulfillment Disabled</Heading>
                    </Layout.Section>
                    <Layout.Section>
                        <Button primary onClick={this.bikeToggleHandler}>Enable</Button>
                    </Layout.Section>
                </Layout>
            );

        let localFulfillSection = this.state.localFulfillEnabled ? (
                <LocalSettings LocalToggleHandler={this.localToggleHandler}/>
            ) : (
            <Layout>
                <Layout.Section>
                    <Heading>Local Fulfillment Disabled</Heading>
                </Layout.Section>
                <Layout.Section>
                    <Button primary onClick={this.localToggleHandler}>Enable</Button>
                </Layout.Section>
            </Layout>
        );

        return (
            <Page
                title="Lycklig Local Carrier App"
            >
                <Card>
                    <Card.Section>
                        <StoreSettings />
                    </Card.Section>
                    <Card.Section>
                        {bikeSection}
                    </Card.Section>
                    <Card.Section>
                        {localFulfillSection}
                    </Card.Section>
                </Card>
            </Page>
        );
    }
}

export default App;
