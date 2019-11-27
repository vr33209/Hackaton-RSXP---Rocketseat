import React from 'react';

import Time from '../../assets/clock-circular-outline 1.svg';

export default function LineOfTime() {
	return (
		<div className='lineOfTime'>
			<div className='tasks'>
				<img src={Time} alt='' />
				<div className='contentTaks'>
					<h2>10 minutos de conversa</h2>
					<div />
				</div>
			</div>
			<div className='tasks'>
				<img src={Time} alt='' />
				<div className='contentTaks'>
					<h2>10 minutos de conversa</h2>
					<div />
				</div>
			</div>
			<div className='tasks'>
				<img src={Time} alt='' />
				<div className='contentTaks'>
					<h2>10 minutos de conversa</h2>
					<div />
				</div>
			</div>
		</div>
	);
}
