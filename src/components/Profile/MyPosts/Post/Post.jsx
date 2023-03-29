import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://static.wikia.nocookie.net/gtawiki/images/3/3c/LifeInvader_GTAV_Jimmy_Profile_large.png" />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;