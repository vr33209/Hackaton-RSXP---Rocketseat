import React, { useState, useEffect } from 'react';

import CardPeople from '../../components/CardPeople';
import Accordeon from '../../components/Accordeon';
import LineOfTime from '../../components/LineOfTime';
import Icon from '../../assets/angle-arrow-down.svg';

export default function Teacher({ user, setObjModal, isOpen, setIsOpen }) {
	return (
		<div className='teacher'>
			<div className='teacherContainer'>
				<Accordeon title='Linha do tempo da aula' i={Icon}>
					<LineOfTime />
				</Accordeon>
				<div className='lineUp'>
					{user.class &&
						user.class.map((classe) => (
							<CardPeople
								onclick={() => {
									setObjModal(classe);
									setIsOpen(!isOpen);
								}}
								classe={classe}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
