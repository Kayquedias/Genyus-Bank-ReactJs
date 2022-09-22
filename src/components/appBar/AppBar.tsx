import './appBar.scss';
import logo from "../../_assets/logo.svg";
import close from "../../_assets/close.svg"
import { useState } from 'react';

interface Value {
  arg?: boolean;
}

export const AppBar = ({arg = true}: Value) => {
  const button = arg;

  return (
    <div id="top-bar">
      <img src={logo} alt="logo Genyus" />
      {button && <button className="btn btn-close" >
        <img src={close} alt="fechar" />
        <span>Fechar</span>
      </button>}
    </div>
  )
}