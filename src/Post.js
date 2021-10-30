import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Gurprem Bhullar</h2>
                    <p>my description</p>
                </div>
            </div>

            <div className="post__body">
                <p>message goes here</p>
            </div>
        </div>
    );
}

export default Post
