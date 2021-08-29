import React from "react";
import "../style.scss";
import successImg from '../../img/success.svg';

export function Success(){
    return(
        <div className="success">
            <div className="title">Оплата прошла успешно</div>
            <img src={successImg} alt="success" />
        </div>
    )
}