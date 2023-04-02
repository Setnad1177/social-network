import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://static.wikia.nocookie.net/gtawiki/images/b/b8/LifeInvader_GTAV_Michael_Profile_large.png'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}

export default ProfileInfo;