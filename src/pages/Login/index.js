import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import Users from '../../services/obj';

import Logo from '../../components/Logo';
import Select from '../../components/Select';

export default function Login() {
	const { history } = useReactRouter();

	const [ onchange, setOnchange ] = useState('Professor');
	const [ registration, setRegistration ] = useState(0);
	const [ messageError, setMessageError ] = useState('');

	const options = [ 'Professor', 'Aluno' ];

	function verifyLogin() {
		setMessageError('');
		const user = Users.find((user) => user.registration === registration);
		if (registration === 0) return setMessageError('Nao deixe o campo matricula vazio');
		if (!user) return setMessageError('Matricula nao encontrada, tente novamente !');
		if (user.type !== onchange) return setMessageError('Nenhum usuario encontrado !');
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const user = Users.find((user) => user.registration === registration && user.type === onchange);

		verifyLogin();
		if (user) {
			await localStorage.removeItem('user');
			localStorage.setItem('user', JSON.stringify(user));
			history.push(`formadev/${user.type}`);
		}
	}

	return (
		<div className='mainContainer'>
			<form onSubmit={handleSubmit}>
				<Logo />
				<Select options={options} setOnchange={setOnchange} />
				<input
					placeholder='Informe o login'
					onBlur={() => verifyLogin()}
					onChange={(e) => setRegistration(Number(e.target.value))}
				/>
				<button type='submit'>Entrar</button>
				<label>{messageError}</label>
			</form>
		</div>
	);
}
