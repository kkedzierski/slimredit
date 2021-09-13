import React from 'react';
import Search from './features/search/Search';
import Post from './features/posts/Post';
import './App.css';
import Subreddit from './features/Subreddits/Subreddit';
import Comment from './features/comments/Comment'
import Logo from './components/Logo/Logo';
import AddSubreddit from './features/Subreddits/AddSubreddit';

function App() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Search />

      </div>
      <AddSubreddit />
      <div class ="body">
        <Post />
        <Subreddit />
      </div>
      <div class = "sidemenu subredits">
        
      </div>
    </>
  );
}

export default App;
