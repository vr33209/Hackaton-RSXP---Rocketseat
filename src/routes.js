import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Login from './pages/Login';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

export default function Routes() {
	const [ user, setUser ] = useState([]);

	useEffect(() => {
		const user = localStorage.getItem('user');
		setUser(JSON.parse(user));
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' exact component={Login} />

				<Route path='/formadev/Aluno' render={() => <Student user={user} />} />
				<Route path='/formadev/Professor' render={() => <Teacher user={user} />} />
			</Switch>
		</BrowserRouter>
	);
}
