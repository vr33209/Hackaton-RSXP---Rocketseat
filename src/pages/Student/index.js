import React, { useEffect, useState } from 'react';
import CardActivy from '../../components/CardActivy';

export default function Student({ user }) {
	return (
		<div className='student'>
			<div className='studentContainer'>
				<h1>Minhas Atividades</h1>
				{user.activy && user.activy.map((activy) => <CardActivy user={activy} />)}
			</div>
		</div>
	);
}
