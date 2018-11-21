import React, { Component } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';

class Product extends Component {
    state = {
        products: []
    }

    componentDidMount = () => {
        this.fetchProduct();
        // const userId = this.props.match.params.id;
        // const businessId = this.props.match.params.id;
        // console.log(businessId);
    }

    fetchProduct = async () => {
        let paramsString = window.location.search
        let searchParams = new URLSearchParams(paramsString);
        let businessId = searchParams.get('businessId')

        let productsRequest = await axios.get(`http://localhost:3001/products?businessId=${businessId}`);
        let products = productsRequest.data;
        this.setState({ products });
    }

    render() {
        return(
            <ProductsList products={this.state.products} />
        )
    }
}

export default Product