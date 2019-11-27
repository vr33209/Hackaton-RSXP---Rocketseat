import AvatarImage from '../../assets/user 1.svg';
import js from '../../assets/javascript (1).svg';

const Users = [
	{
		registration: 145789,
		name: 'Joao Victor',
		email: 'vr33209@gmail.com',
		type: 'Professor',
		dateBirth: '12-08-2000',
		serie: 2,
		level: 3,
		task_complete: 5,
		avatar: AvatarImage,
		total_task: 10,
		activy: []
	},
	{
		registration: 1345678,
		name: 'Yago silva',
		email: 'yagosilva@gmail.com',
		type: 'Aluno',
		dateBirth: '12-08-1960',
		serie: 3,
		level: 7,
		task_complete: 2,
		avatar: AvatarImage,
		total_task: 7,
		activy: [
			{
				title: 'Criando classe com javascript',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				Avaliation: 10,
				imageLanguage: js
			},
			{
				title: 'Criando funcao com javascript',
				nivel: '2',
				serie: '1º Ano',
				status: 'Pendente',
				Nota: 10,
				imageLanguage: js
			},
			{
				title: 'Entendendo node js',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				Nota: 10,
				imageLanguage: js
			}
		]
	}
];

export default Users;
