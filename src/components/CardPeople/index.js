import React from 'react';
import AvatarImage from '../../assets/pessoa2.jpeg';

export default function CardPeople({ classe, onclick }) {
	return (
		<div className='cardPeople' onClick={() => onclick()}>
			<img src={AvatarImage} alt='' />
			<h2>{classe.name}</h2>
			<span>{classe.type}</span>
		</div>
	);
}
