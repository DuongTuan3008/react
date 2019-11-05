import React, { Component } from 'react'
import axios from '../axios';

import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

export default class CategoryScreen extends Component {
    state = {
        images: [],
        searchString: "",
        displayedImages: []
    };

    componentDidMount() {
        axios
            .get('/api/book')
            .then((data) => {
                console.log(data);
                this.setState({
                    images: data.data.data,
                })
            })
            .catch((err) => console.log(err));
    }

    _onSearchChanged = text => this.setState({ searchString: text });

    render() {
        const displayedImages = this.state.images.filter(
            img => img.title.includes(this.state.searchString)
                || img.author.includes(this.state.searchString)
                || img.category.includes(this.state.searchString)
        )

        return (
            <div>
                <NavBar category={this.props.location.state.category} onSearchChanged={this._onSearchChanged} />
                <MainContent img={displayedImages} />
            </div>
        )
    }
}
