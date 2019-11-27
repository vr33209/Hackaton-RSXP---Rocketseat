import React, { Fragment } from 'react';

export default function Modal({ setIsOpen, isOpen, objModal }) {
	return (
		<Fragment>
			{isOpen && (
				<div className='modal' onClick={() => setIsOpen(!isOpen)}>
					<div className='modalBoxProfileModal' onClick={(e) => e.stopPropagation()}>
						<div className='profileModal'>
							<img src={objModal.avatar} alt='' />
							<h1>{objModal.name}</h1>
							<span>Serie: {objModal.level}</span>
						</div>
						<div>
							<h2>
								Nome: <span>{objModal.name}</span>
							</h2>
							<h2>
								E-mail: <span>{objModal.email}</span>
							</h2>
							<h2>
								Level: <span>{objModal.level}</span>
							</h2>
							<h2>
								Progresso:
								<span>
									{objModal.task_complete}/{objModal.total_task}
								</span>
							</h2>
							<h2>
								Matricula: <span>{objModal && objModal.registration}</span>
							</h2>

							<h1>Enviar atividade</h1>
							<input type='text' />
							<label>
								<input type='file' />
							</label>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
}
