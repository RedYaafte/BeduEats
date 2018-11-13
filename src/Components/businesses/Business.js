import React, { Component } from 'react';
import BusinessList from './BusinessList';
import axios from 'axios';

class BusinessCont extends Component {
    state = {
        businessCont: []
    }

    componentDidMount = () => {
        this.fetchBusinessCont();
    }

    fetchBusinessCont = async () => {
        let businessRequest = await axios.get('http://localhost:3001/business/');
        let businessCont = businessRequest.data;
        console.log(businessCont);
        this.setState({ businessCont });
    }

    render() {
        return (
            <BusinessList businessCont={this.state.businessCont} />
        )
    }
}

export default Business;