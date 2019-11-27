import React from 'react';
import CardActivy from '../../components/CardActivy';
import videos from './videoRelated';

export default function Student({ user }) {
	return (
		<div className='student'>
			<div className='studentContainer'>
				<div>
					<span>Minhas Atividades</span>
					{user.activy && user.activy.map((activy) => <CardActivy user={activy} />)}
				</div>

				<div className='studentMaterial'>
					<h1>Materiais complementares</h1>
					{videos.map((video) => <img src={video.img} alt='' />)}
				</div>
			</div>
		</div>
	);
}
