import React, { useState } from "react";
import { ConnectPayForm } from "./sections/PayForm";
import { Process } from "./sections/PayProcess";
import { Success } from "./sections/PaySuccess";
import "./style.scss";
import { connect } from "react-redux";
import { saveCard } from "./../actions";

export function Pay(props: any) {
  return (
    <div className="pay">
      {props.status == "wait" && <ConnectPayForm />}
      {props.status["status"] == "process" && <Process />}
      {props.status["status"] == "ok" && <Success />}
    </div>
  );
}

export const ConnectPay = connect(
  (state: { pid: any; status: any }) => ({
    pid: state.pid,
    status: state.status,
  }),
  { saveCard }
)(Pay);
