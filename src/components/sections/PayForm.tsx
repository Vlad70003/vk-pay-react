import React, { useState } from "react";
import "../style.scss";
import { connect } from "react-redux";
import { saveCard } from "../../actions";
import { ErrorMessages } from "./ErrorMessages";
import {
  cardnumHandler,
  dateHandler,
  cvvHandler,
  nameHandler,
} from "../../script/script-handler";

export function PayForm(props: any) {
  let [number, setNumber] = useState("");
  let [date, setDate] = useState("");
  let [cvv, setCvv] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState(false);
  let [errorText, setErrorText] = useState<string[]>([]);

  let handleSubmit = (
    e: any,
    number: string,
    date: string,
    name: string,
    cvv: string
  ) => {
    e.preventDefault();
    let errorFlag = false;
    setErrorText((errorText = []));

    //Валидация номера карты
    if (number.length < 16) {
      setErrorText((error) => [
        ...error,
        "Длинна номера карты должна быть от 13 до 19 символов",
      ]);
      setError((error = true));
      errorFlag = true;
    }

    //Валидация даты карты
    if (date[2] !== "/" && date.length !== 5) {
      setErrorText((error) => [
        ...error,
        'Дата должна быть заполена в формате "ММ/ГГ"',
      ]);
      setError((error = true));
      errorFlag = true;
    } else if (date[2] == "/" && date.length == 5) {
      let newDate = date.split("/");
      if (!(+newDate[0] >= 1 && +newDate[0] <= 12)) {
        setErrorText((error) => [
          ...error,
          "При заполнении даты необходимо учесть, что месяц - число от 1 до 12",
        ]);
        errorFlag = true;
      } else if (!(+newDate[1] >= 21 && +newDate[1] <= 26)) {
        setErrorText((error) => [
          ...error,
          "При заполнении даты необходимо учесть, что год - число от 21 до 26",
        ]);
        errorFlag = true;
      }
    } else if (date[2] !== "/" && date.length == 5) {
      setErrorText((error) => [
        ...error,
        'Дата должна быть заполена в формате "ММ/ГГ"',
      ]);
      setError((error = true));
      errorFlag = true;
    }

    //Валидация cvv карты
    if (cvv.length !== 3) {
      setErrorText((error) => [...error, "CVV код должен состоять из 3 цифр"]);
      setError((error = true));
      errorFlag = true;
    }
    //Валидация имени владельца карты
    if (name.length !== 0) {
      let newName = name;
      if (newName[0].split(" ").length !== 2) {
        setErrorText((error) => [
          ...error,
          "Введите фамилию и имя через пробел",
        ]);
        setError((error = true));
        errorFlag = true;
      }
    } else {
      setErrorText((error) => [...error, "Введите фамилию и имя"]);
      setError((error = true));
      errorFlag = true;
    }

    //Ошибок нет - отправляем данные
    if (!errorFlag) {
      setError((error = false));
    }
    if (!error) {
      props.saveCard(number, date, name, cvv);
    }
  };

  let getStar = (cvv: any): any => {
    let star = Array(cvv.length).fill("*").join("");
    return star;
  };

  return (
    <form
      action=""
      className="form"
      onSubmit={(e) => {
        handleSubmit(e, number, date, name, cvv);
      }}
    >
      <h1 className="title">Оплата банковской картой</h1>
      <label htmlFor="number" className="label">
        Номер карты
      </label>
      <input
        type="text"
        name="number"
        className={
          error && number.length < 16 ? "red-border input" : "blue-border input"
        }
        placeholder="Введите номер карты"
        value={number}
        onChange={(e) => {
          cardnumHandler(e, number, setNumber);
        }}
        maxLength={22}
      />
      <div className="horizontal-positioning">
        <div className="horizontal-positioning__wrapper">
          <label htmlFor="date" className="label">
            Месяц/Год
          </label>
          <input
            type="text"
            name="date"
            className={
              error && date.length < 5
                ? "red-border input"
                : "blue-border input"
            }
            placeholder="ММ/ГГ"
            value={date}
            onChange={(e) => {
              dateHandler(e, date, setDate);
            }}
            maxLength={5}
          />
        </div>
        <div className="horizontal-positioning__wrapper">
          <label htmlFor="cvv" className="label">
            Код
          </label>
          <input
            type="password"
            name="cvv"
            className={
              error && cvv.length < 3
                ? "red-border input transparent"
                : "blue-border input transparent"
            }
            placeholder="CVV"
            onChange={(e) => {
              cvvHandler(e, cvv, setCvv);
            }}
            maxLength={3}
          />
          <div className="span">{getStar(cvv)}</div>
        </div>
      </div>
      <label htmlFor="name" className="label">
        Владелец карты
      </label>
      <input
        type="text"
        name="name"
        className={error ? "red-border input" : "blue-border input"}
        placeholder="Введите свои данные"
        onChange={(e) => {
          nameHandler(e, name, setName);
        }}
      />
      <input
        type="submit"
        value="Оплатить"
        className={
          number.length >= 16 &&
          date.length == 5 &&
          cvv.length == 3 &&
          name.length !== 0
            ? "blue-bg button"
            : "grey-bg button"
        }
      />
      <div className="error-message">
        {error && <ErrorMessages errorText={errorText} />}
      </div>
    </form>
  );
}

export const ConnectPayForm = connect(
  (state: { pid: any; status: any }) => ({
    pid: state.pid,
    status: state.status,
  }),
  { saveCard }
)(PayForm);
