import React, { useState, useEffect } from 'react';

import CardPeople from '../../components/CardPeople';
import Accordeon from '../../components/Accordeon';
import LineOfTime from '../../components/LineOfTime';
import Icon from '../../assets/angle-arrow-down.svg';

export default function Teacher({ user }) {
	const [ classe, setClasse ] = useState([]);

	useEffect(() => {
		const user = localStorage.getItem('user');
		setClasse(JSON.parse(user));
	}, []);

	return (
		<div className='teacher'>
			<div className='teacherContainer'>
				<Accordeon title='Linha do tempo da aula' i={Icon}>
					<LineOfTime />
				</Accordeon>
				<div className='lineUp' onClick={() => alert('teste')}>
					{classe.class && classe.class.map((classe) => <CardPeople classe={classe} />)}
				</div>
			</div>
		</div>
	);
}
