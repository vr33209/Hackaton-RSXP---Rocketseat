import React from 'react';

import LogoDev from '../../assets/logo.svg';

export default function Logo() {
	return (
		<div className='logo'>
			<h1>FormaDEV</h1>
			<img src={LogoDev} alt='Logo' />
		</div>
	);
}
