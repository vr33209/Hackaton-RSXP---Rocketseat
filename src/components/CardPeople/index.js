import React from 'react';
import AvatarImage from '../../assets/pessoa2.jpeg';

// import { Container } from './styles';

export default function CardPeople() {
	return (
		<div className='cardPeople'>
			<img src={AvatarImage} alt='' />
			<h2>Ana Julia</h2>
			<span>Professor</span>
		</div>
	);
}
