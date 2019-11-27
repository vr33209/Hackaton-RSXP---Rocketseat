import React from 'react';

export default function CardActivy({ user }) {
	return (
		<div className=''>
			<img src={user && user.imageLanguage} alt='' />
			<h1>{user && user.title}</h1>
			<h2>
				Nivel: <span>user.nivel</span>
			</h2>
			<h2>
				Serie: <span>user.serie</span>
			</h2>
			<h2>
				status: <span>user.status</span>
			</h2>
			<h2>
				Nota: <span>user.Avaliation</span>
			</h2>
		</div>
	);
}
