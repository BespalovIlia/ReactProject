import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  
  let postsElements =props.posts.map ( p => <Post  message ={p.message} likecount ={p.likecount}/>);

    return (
        <div className ={s.postBlock}>
          <h3>My Posts</h3>
          <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add text</button>
            </div>
          </div>
          <div className = {s.posts}>
             {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;