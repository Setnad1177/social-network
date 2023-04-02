import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Amanda De Santa" id="1"/>
                <DialogItem name="Jimmy De Santa" id="2"/>
                <DialogItem name="Lamar Davis" id="3"/>
                <DialogItem name="Trevor Philips" id="4"/>
                <DialogItem name="Franklin Clinton" id="5"/>
                <DialogItem name="Denise Clinton" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Will you clean the juicer after you use it?"/>
                <Message message="Will you clean the juicer after you use it?"/>
                <Message message="Will you clean the juicer after you use it?"/>
            </div>
        </div>
    )
}

export default Dialogs;
