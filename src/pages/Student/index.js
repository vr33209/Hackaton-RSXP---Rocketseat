import React from 'react';
import CardActivy from '../../components/CardActivy';

export default function Student({ user }) {
	return (
		<div className='student'>
			<div className='studentContainer'>
				<span>Minhas Atividades</span>
				{user.activy && user.activy.map((activy) => <CardActivy user={activy} />)}
			</div>
			<div className='studentMaterial' />
		</div>
	);
}
