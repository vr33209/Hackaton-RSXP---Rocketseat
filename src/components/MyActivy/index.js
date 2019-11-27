import React, { Fragment } from 'react';

import CardPeople from '../../components/CardPeople';

export default function MyActivy({ user, setObjModal, setIsOpen, isOpen }) {
	return (
		<Fragment>
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
		</Fragment>
	);
}
