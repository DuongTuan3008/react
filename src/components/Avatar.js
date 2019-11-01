import React, { Component } from 'react';

export default class Avatar extends Component {
	render() {
		return (
			<div className="avatar border border-primary rounded mt-2">
				<img
					className="img-fluid"
					src={this.props.img.avalink}
					alt={this.props.img.title}
				/>
				<h6>{this.props.img.title}</h6>
				<p className="font-italic" rel="author">
					{this.props.img.author}
				</p>
			</div>
		);
	}
}
