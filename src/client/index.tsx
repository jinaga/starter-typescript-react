import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { UserContainer } from './components/user-container';
import './styles/app';

ReactDOM.render(
  <UserContainer>
    <App />
  </UserContainer>,
  document.getElementById('application-host'));
