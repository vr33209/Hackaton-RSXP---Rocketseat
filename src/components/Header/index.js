import React, { useEffect, useState, Fragment } from 'react';
import useReactRouter from 'use-react-router';

import Logo from '../Logo';

export default function Header() {
	const { location } = useReactRouter();

	const [ user, setUser ] = useState({});

	useEffect(() => {
		const user = window.localStorage.getItem('user');
		setUser(JSON.parse(user));
	}, []);

	return (
		<Fragment>
			{location.pathname === '/' ? null : (
				<header className='header'>
					<Logo />
					<div>
						<h1>
							{location.pathname === '/formadev/Professor' ? (
								`Sala de aula #${user.registration}`
							) : (
								'Minhas Tarefas'
							)}
						</h1>
					</div>
					<div className='profile'>
						<label>
							<h2>{user && user.name}</h2>
							<span>{user && user.type}</span>
						</label>
						<img src={user && user.avatar} alt='' />
					</div>
				</header>
			)}
		</Fragment>
	);
}
