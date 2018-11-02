import React, { Component } from 'react';
import {Button, Form, FormLayout, Heading, Layout, TextField} from "@shopify/polaris";

class StoreSettings extends Component {
    state = {
        apiKey: '',
        token: ''
    };

    componentDidMount(){
        console.log('Get info from DB');
    }

    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
    };

    handleSubmit = () => {
        console.log('Save state in DB');
    };

    render () {
        return (
            <Layout>
                <Layout.Section secondary>
                    <Heading>Store Credentials</Heading>
                    <p>All the information needed to connect to your store.</p>
                </Layout.Section>
                <Layout.Section secondary>
                    <Form onSubmit={this.handleSubmit}>
                        <FormLayout>
                            <TextField
                                value={this.state.apiKey}
                                onChange={this.handleChange('apiKey')}
                                label="API Key"
                                type="text"
                            />
                            <TextField
                                value={this.state.token}
                                onChange={this.handleChange('token')}
                                label="Password"
                                type="password"
                            />

                            <Button submit>Save</Button>
                        </FormLayout>
                    </Form>
                </Layout.Section>
            </Layout>
        );
    }
}

export default StoreSettings;