import React, { Component } from 'react';

export default class SearchField extends Component {
	_handleTextChange = event => this.props.onSearchChanged(event.target.value);
	render() {
		return (
			<form className="col-3">
				<input onChange={this._handleTextChange} defaultValue={this.props.category} className="form-control" type="text" placeholder="Search" />
			</form>
		);
	}
}
