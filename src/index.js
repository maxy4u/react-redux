import 'babel-polyfill' ;// some method babel alone unable to trnaspile like object.assign is one such example
import React from 'react';
import { render } from 'react-dom';
import {Router , browserHistory } from 'react-router' ; // html5 history api 
import routes from './routes';
import './styles/styles.css' ; // webpack can import css too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
