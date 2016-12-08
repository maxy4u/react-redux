import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import {AboutPage} from './components/about/AboutPage';

export default (
	<Route path="/" component = {App}> // always load App component
		<IndexRoute component = {HomePage} /> // loads Homepage only for index or default path and passed as a child to App component
		<Route path="about" component={AboutPage} /> // loads About page when about path is requested  and passed as a child to App component
	</Route>
)