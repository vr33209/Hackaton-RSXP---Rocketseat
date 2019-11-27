import React, { Fragment } from 'react';

export default function Modal({ setIsOpen, isOpen, objModal }) {
	return (
		<Fragment>
			{isOpen && (
				<div className='modal' onClick={() => setIsOpen(!isOpen)}>
					<div className='modalCard' onClick={(e) => e.stopPropagation()}>
						<div className='modalProfileSection'>
							<img className='modalProfileSectionAvatar' src={objModal.avatar} alt={objModal.name} />
							<h1 className='modalProfileSectionTitle'>{objModal.name}</h1>
							<h2 className='modalProfileSectionSubTitle'>Serie: {objModal.level}</h2>
						</div>
						<div className='modelProfilDetailSection'>
							<span className='modelProfilDetailSectionSpan'>
								<label className='modelProfilDetailSectionLabel'> Nome: </label> {objModal.name}
							</span>
							<span className='modelProfilDetailSectionSpan'>
								<label className='modelProfilDetailSectionLabel'> E-mail: </label> {objModal.email}
							</span>
							<span className='modelProfilDetailSectionSpan'>
								<label className='modelProfilDetailSectionLabel'> Level: </label> {objModal.level}
							</span>
							<span className='modelProfilDetailSectionSpan'>
								<label className='modelProfilDetailSectionLabel'> Progresso: </label>{objModal.task_complete}/{objModal.total_task}
							</span>
							<span className='modelProfilDetailSectionSpan'>
								<label className='modelProfilDetailSectionLabel'> Matricula: </label>{objModal && objModal.registration}
							</span>


							<h1 className='modelProfilDetailSectionActivityTitle'>Enviar atividade</h1>

							<form>
								<input placeholder='Titulo da atividade'/>
								<input placeholder='Anexar arquivo'/>
								<button type='submit'>Enviar</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
}
