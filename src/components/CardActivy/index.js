import React from 'react';

export default function CardActivy({ user }) {
	return (
		<div className='cardActivity'>
			<div className='cardActivitylogo'>
				<img src={user.imageLanguage} alt='' />
			</div>
			<div className='cardActivityDetails'>
				<h1 className='cardActivityTitle'>{user.title}</h1>
				<span className='cardActivitySpan'>
					<label className='cardActivityLabel'> Nivel: </label> {user.nivel}
				</span>
				<span className='cardActivitySpan'>
					<label className='cardActivityLabel'> Serie: </label> {user.serie}
				</span>
				<span className='cardActivitySpan'>
					<label className='cardActivityLabel'> status: </label> {user.status}
				</span>
				<span className='cardActivitySpan'>
					<label className='cardActivityLabel'> Nota: </label> {user.Avaliation}
				</span>
			</div>

		</div>
	);
}
