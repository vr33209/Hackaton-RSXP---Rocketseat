import React from 'react';
import AvatarImage from '../../assets/pessoa2.jpeg';

export default function CardPeople({ classe, onclick }){
	return (
		<div className='cardPeople' onClick={() => onclick()}>
			<img src={classe.avatar} alt={classe.name} />
			<h2>{classe.name}</h2>
			<span>{classe.type}</span>
		</div>
	);
}
