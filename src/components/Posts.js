import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left" >
                <Post src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/the-dark-rose-daniel-arrhakis.jpg" alt ="dark" />
                <Post src ="https://ludaflower.com/wp-content/uploads/2018/06/CYO-whiterose1.jpg" alt="white"/>
            </div>
        )
    }
}