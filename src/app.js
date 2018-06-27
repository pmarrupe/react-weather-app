import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// root element to put everything inside. We can have multiple react apps on a page and each will have diff roots. For this app we have one root.(spa setup)

const root = document.getElementById('app-container');
ReactDOM.render(<App />, root); 