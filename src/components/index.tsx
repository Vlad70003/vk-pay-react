import React, { useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { saveCard } from '../actions';
import {cardnumHandler, dateHandler, cvvHandler, nameHandler} from '../script/script-handler';

export function Pay(props:any){
    let [number, setNumber] = useState('');
    let [date, setDate] = useState('');
    let [cvv, setCvv] = useState('');
    let [name, setName] = useState('');

    let handleSubmit = (e:any) => {
        e.preventDefault();
        props.saveCard( number, date, name, cvv);
    }


    return (
        <form action="" className="form" onSubmit={(e) => {handleSubmit(e)}}>
                <h1 className="title">Оплата банковской картой</h1>
                <label htmlFor="number" className="label">Номер карты</label>
                <input type="text" name="number" className="blue-border input" placeholder="Введите номер карты" value={number} onChange={(e) => {cardnumHandler(e, number, setNumber)}} maxLength={19} />
                <div className="horizontal-positioning">
                    <div className="horizontal-positioning__wrapper">
                        <label htmlFor="date" className="label" >Месяц/Год</label>
                        <input type="text" name="date" className="blue-border input" placeholder="ММ/ГГ" value={date} onChange={(e) => {dateHandler(e, date, setDate)}}  maxLength={5} />
                    </div>
                    <div className="horizontal-positioning__wrapper">
                        <label htmlFor="cvv" className="label">Код</label>
                        <input type="text" name="cvv" className="blue-border input" placeholder="CVV" onChange={(e) => {cvvHandler(e, cvv, setCvv)}} maxLength={3} />
                    </div>
                </div>
                <label htmlFor="name" className="label">Владелец карты</label>
                <input type="text" name="name" className="blue-border input" placeholder="Введите свои данные" onChange={(e) => {nameHandler(e, name, setName)}} />
                <input type="submit" value="Оплатить" className="grey-bg button" />
        </form>
    )
}

export const ConnectPay = connect(
    null,
    { saveCard }
)(Pay)