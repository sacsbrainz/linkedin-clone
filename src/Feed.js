import React, { useEffect, useState } from 'react';
import './Feed.css';
// import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import FeedIcon from '@mui/icons-material/Feed';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import { Avatar } from '@mui/material';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
          setPosts(snapshot.docs.map((doc) => (
              {
                  id: doc.id,
                  data:doc.data(),
              }
          ))
      ));
  },[]);

  const sendPost = (e) => {
      e.preventDefault();

      db.collection('posts').add({
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput('');
  };

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_mod">
                <Avatar className='user_icon' src={user?.photoUrl}>
                    {user?.displayName[0]}
                </Avatar>
                <div className="feed_input">
                    
                    {/* <CreateIcon /> */}
                    <form>
                        <input placeholder='Start a post' value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B579'/>
                <InputOption Icon={VideocamIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={FeedIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>
        <FlipMove>
            {posts.map(({id, data:{name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </FlipMove>        

    </div>
    
  )
}

export default Feed;