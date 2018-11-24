import React, { Component } from 'react';
import HomeList from './HomeList';
import axios from 'axios';

class Home extends Component {
    state = {
        home: []
    };

    componentDidMount = () => {
        this.fetchHome();
    }

    fetchHome = async () => {
        let homeRequest = await axios.get('http://localhost:3001/business');
        let home = homeRequest.data;
        this.setState({ home });
    }

    render() {
        return (
            <>
                <div>
                    <h1>Bedu Eats</h1>
                    <hr/>
                    <h2>Entregas de comida en Ciudad de México</h2>
                </div>
                <HomeList home={this.state.home} />
            </>
        )
    };
};

export default Home;