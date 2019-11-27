import React from 'react';

import CardPeople from '../../components/CardPeople';
import Accordeon from '../../components/Accordeon';
import LineOfTime from '../../components/LineOfTime';
import Icon from '../../assets/angle-arrow-down.svg';

export default function Teacher() {
	return (
		<div className='teacher'>
			<div className='teacherContainer'>
				<Accordeon title='Linha do tempo da aula' i={Icon}>
					<LineOfTime />
				</Accordeon>
				<div className='lineUp'>
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
					<CardPeople />
				</div>
			</div>
		</div>
	);
}
