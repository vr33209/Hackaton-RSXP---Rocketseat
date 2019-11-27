import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Login from './pages/Login';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

export default function Routes() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' exact component={Login} />

				<Route path='/formadev/Aluno' component={Student} />
				<Route path='/formadev/Professor' component={Teacher} />
			</Switch>
		</BrowserRouter>
	);
}
