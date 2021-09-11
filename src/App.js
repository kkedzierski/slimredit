import React from 'react';
import { FcAbout } from 'react-icons/fc';
import Search from './features/search/Search';
import Post from './features/posts/Post';
import Tooltip from "react-simple-tooltip"
import './App.css';
import Subredit from './features/Subredits/Subredit';
import Comment from './features/comments/Comment'
import Logo from './components/Logo/Logo';

function App() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Search />
        <Tooltip 
          placement={'bottom'}
          content="This is slim version of reddit.com only for read">
          <FcAbout className="about"/>
        </Tooltip>
      </div>
      <div class ="body">
        <Post />
        <Subredit />
      </div>
      <div class = "sidemenu subredits">
        
      </div>
    </>
  );
}

export default App;
