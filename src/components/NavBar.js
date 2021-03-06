import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchField from './SearchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';

export default class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="container">
					<SearchField category={this.props.category} onSearchChanged={this.props.onSearchChanged} />
					<Link to={"/"} >
						<div className="col-6 text-center">
							<img width="180" height="70" src={logo} alt="logo" />
						</div>
					</Link>
					<ProfilePanel />
				</div>
			</div>
		);
	}
}
