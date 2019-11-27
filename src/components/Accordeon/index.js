import React, { useState } from 'react';

export default function Accordeon({ title, i, children }) {
	const [ accordeonOpen, setAccordeonOpen ] = useState(false);

	return (
		<div className={`accordeon${accordeonOpen ? ' isOpen' : ''}`}>
			<p
				className='accordeonLabel'
				onClick={(e) => {
					e.stopPropagation();
					setAccordeonOpen(!accordeonOpen);
				}}
			>
				{title}

				<button>
					<img src={i} alt='' />
				</button>
			</p>
			<div className='accordeonContent'>{children}</div>
		</div>
	);
}
