import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

//gold highlight of selected link
const SelectedLink = () => {
    return (
        select => select.isActive ? s.active : s.item
    )
}

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={SelectedLink()}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' className={SelectedLink()}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={SelectedLink()}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={SelectedLink()}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={SelectedLink()}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;