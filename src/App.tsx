import React from 'react';
import { ConnectPay } from './components/Pay';
import './App.scss';
import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      < ConnectPay />
    </div>
  );
}

export default connect(
	null,
  null
)(App);
