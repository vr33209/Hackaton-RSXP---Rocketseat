import React from 'react';

export default function Select({ options, setOnchange }) {
	return (
		<select onChange={(e) => setOnchange(e.target.value)}>
			{options.map((option) => <option value={option}>{option}</option>)}
		</select>
	);
}
