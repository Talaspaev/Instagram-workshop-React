/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { Component } from 'react';
import User from './User';

import photo from './phot.png';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src={photo}
          alt="man"
          name="Dan"
          min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">
                    some account
        </div>
        <div className="post__descr">
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        </div>
      </div>
    );
  }
}
