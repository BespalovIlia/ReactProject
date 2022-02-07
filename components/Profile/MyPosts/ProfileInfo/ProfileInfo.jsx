import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
      <div>
        <div>
        <img src ='https://www.closetag.com/images/photo4.jpg' />
        </div>
        <div className ={s.discriptionBlock}>
          ava+description
        </div>
      </div>
    );
}

export default ProfileInfo;