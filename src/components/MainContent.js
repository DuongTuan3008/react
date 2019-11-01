import React, { Component } from 'react';
import Avatar from './Avatar';

import { Link } from 'react-router-dom';


export default class MainContent extends Component {
    render() {
        const allAvatars = this.props.img.map(img =>
            <div key={img._id} className="col-3">
                <Link to={`/api/book/${img._id}`} >
                    <Avatar img={img} />
                </Link>
            </div>
        );
        return (
            <div className="main_content container">
                <div className="row">
                    {allAvatars}
                </div>
            </div>
        )
    }
}
