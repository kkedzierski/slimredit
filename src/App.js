import React from 'react';
import logo from './logo.svg';
import Search from './features/search/Search';
import Post from './features/posts/Post';
import './App.css';
import Subredit from './features/Subredits/Subredit';
import Comment from './features/comments/Comment'

function App() {
  return (
    <>
      <Search />
      <div class ="posts">
        <Post />
        <Comment />
      </div>
      <div class = "sidemenu subredits">
        <Subredit />
      </div>
    </>
  );
}

export default App;
