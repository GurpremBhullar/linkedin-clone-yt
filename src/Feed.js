import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post"; 

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Get Gurped</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Photo" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Photo" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Photo" color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            <Post
                name="Gurprem Bhullar"
                description='This is a test'
                message="wow it worked"
            />
        </div>
    )
}

export default Feed
