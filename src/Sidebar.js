import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import Background from "./background.jpg";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={Background} alt="background" />
                <Avatar className="sidebar__avatar" />
                <h2>Gurprem Bhullar</h2>
                <h4>bhullargurprem@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('developer')}
                {recentItem('design')}
                {recentItem('MERN')}
                {recentItem('JQuery')}
            </div>
        </div>
    );
}
export default Sidebar;

