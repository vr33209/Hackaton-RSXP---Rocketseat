import React from 'react';

export default function CardPeople({ classe, onclick }) {
	return (
		<div className='cardPeople' onClick={() => onclick()}>
			<img src={classe.avatar} alt={classe.name} />
			<h2>{classe && classe.name}</h2>
			<span>{classe && classe.type}</span>
		</div>
	);
}
