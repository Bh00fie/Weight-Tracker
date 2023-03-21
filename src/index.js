import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'theme-ui';
import theme from './components/Theme/theme';

ReactDOM.render(<App />, document.getElementById('root'));
