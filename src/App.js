import React from 'react';
import Search from './features/search/Search';
import PostSwitcher from './features/posts/PostSwitcher';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import Subreddit from './features/Subreddits/Subreddit';
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
        <PostSwitcher />
        <Subreddit />
      </div>
      <div class = "sidemenu subredits">
        
      </div>
    </>
  );
}

export default App;
