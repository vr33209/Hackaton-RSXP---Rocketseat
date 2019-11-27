import React from 'react';
import AvatarImage from '../../assets/pessoa2.jpeg';

// import { Container } from './styles';

export default function CardPeople({ classe }) {
	return (
		<div className='cardPeople'>
			<img src={AvatarImage} alt='' />
			<h2>{classe.name}</h2>
			<span>{classe.type}</span>
		</div>
	);
}
