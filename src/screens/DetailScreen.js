import React, { Component } from 'react';
import Avatar from '../components/Avatar';
import axios from '../axios';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class DetailScreen extends Component {
	state = {};

	componentDidMount() {
		axios
			.get(`/api/book/${this.props.match.params.imageId}`)
			.then((data) => {
				console.log(data);
				this.setState({
					image: data.data.data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<NavBar category={this.state.image ? this.state.image.category : ""} />
				<div className="main_content container">
					<div className="row">
						<div className="col-4">
							{this.state.image ? <Avatar img={this.state.image} /> : ''}
						</div>
						<div className="col-8 bg-light mt-2 border-primary rounded">
							{this.state.image ? <p>{this.state.image.description}</p> : ''}
							{this.state.image ?
								<Link to={{
									pathname: '/category',
									search: { category: this.state.image.category }
								}}>
									<button type="button" className="btn btn-outline-primary" >
										{this.state.image.category}
									</button>
								</Link>
								: ""}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
