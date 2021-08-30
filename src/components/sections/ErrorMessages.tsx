import React from "react";

type propTypes = {
  errorText: string[];
};

export function ErrorMessages(props: propTypes) {
  let createErrorMessages = (errorText: string[]): any => {
    let messages = [];
    for (let i = 0; i < errorText.length; i++) {
      messages.push(
        <li className="element" key={errorText[i]}>
          {errorText[i]}
        </li>
      );
    }
    return messages;
  };

  return <ul className="list">{createErrorMessages(props.errorText)}</ul>;
}
