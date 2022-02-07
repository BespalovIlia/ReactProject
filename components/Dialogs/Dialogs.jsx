import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className = {s.dialog + " " + s.active}>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className ={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Vasia'},
        {id: 2, name: 'Alesha'},
        {id: 3, name: 'Alla'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Dima'}
    ]
    
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Buenos'},
        {id: 5, message: 'Privet'},
        {id: 6, message: 'Hola'}
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name ={d.name} id ={d.id}/> );
    let messagesElements = messages.map (m => <Message message ={m.message} /> );

    return (
        <div className ={s.dialogs}>
            <div className ={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className ={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;