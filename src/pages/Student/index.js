import React, { useEffect, useState } from 'react';
import CardActivy from '../../components/CardActivy';

export default function Student() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const user = localStorage.getItem('user');
		setUser(JSON.parse(user));
	}, []);

	return (
		<div className='student'>
			<div className='studentContainer'>
				<span>Minhas Atividades</span>
				{user.activy && user.activy.map((activy) => <CardActivy user={activy} />)}
			</div>
			<div className='studentMaterial'>
				
			</div>
		</div>
	);
}
