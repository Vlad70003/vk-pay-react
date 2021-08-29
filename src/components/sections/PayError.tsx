import React from "react";
import "../style.scss";
import errorImg from '../../img/error.svg';


export function Error(){
    return(
        <div className="success">
            <div className="title">Произошла ошибка</div>
            <img src={errorImg} alt="error" />
        </div>
    )
}