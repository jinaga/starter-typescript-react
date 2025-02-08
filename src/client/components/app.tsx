import { Domain } from "@shared/model/visit";
import * as React from 'react';
import '../styles/app';
import { withUser } from './user-container';
import { VisitCounter } from "./visit-counter";

const AppDetail = withUser(({ user, userDisplayName }) => (
    <VisitCounter user={ user } userDisplayName={ userDisplayName } domain={ new Domain("myapplication") } />
  ), () => (
    <p>Place your login links here</p>
  )
);

export const App = () => {
  return (
    <>
      <AppDetail />
    </>
  );
};
