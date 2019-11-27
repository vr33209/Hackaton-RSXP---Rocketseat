# FormaDEV - FRONTEND

Formar desenvolvedores, levando conteúdo para alunos de ensino médio de escolas credenciadas na plataforma Forma Dev.
Entregar ensino de programação com metodologias agregada a uma plataforma de ensino presencial e disponível também online.
Públicos alvo
	*	Escolas privadas: levar a plataforma por um preço que cubra os custos de manter a plataforma
	*	Escolas públicas: levar a plataforma custeado pelo governo do estado ou prefeituras.

Como será feito:
* Inicialmente começaremos em busca de escolas de rede privada, e cada contrato firmado em escola privada lançaremos o projeto em uma escola público, totalmente de graça. Assim dando ensino de qualidade às escolas públicas

*-* Mobilizar familiares e pessoas para mostrar o quão importante será necessário a programação no futuro.

*-* O projeto em cada escola terá o tempo mínimo de 4 anos, iniciando com palestras e workshops. Começando pelo 8º / 9º ano dando palestras e workshops, mostrando com estatísticas o quão bom pode ser a carreira de Dev. Nos demais anos inicia*--se o curso com duração de 3 anos.

*-* Durante os 3 anos de curso, cada ano terá sua metodologia única e seu cronograma. E todos os projetos desenvolvidos serão aplicados em prol da sociedade e da própria escola.

Confira o acesso a demo: https://formadev*-*frontend.herokuapp.com/

## Instalação

Para instalar a começar a codar o FormaDEV, você deve ter o node instalado e de preferencia utilizar o yarn, para saber mais confira abaixo os links de instalação:

* https://nodejs.org/en/
* https://yarnpkg.com/lang/en/

Para codar siga os seguintes comandos:

````shell script
# Para instalar as dependencias
yarn install

# Para iniciar o desenvolvimento
yarn start
````

## Dados de acesso

Os dados de acesso a aplicação abaixo são dados fakes, apenas para testar o acesso nas primeiras telas, confira abaixo:

**Aluno**

- Matricula: 1345678

````json5
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
				title: 'Entendendo node js',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				nota: 10,
				imageLanguage: js
			},
			{
				title: 'Entendendo node js',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				nota: 10,
				imageLanguage: js
			},
			{
				title: 'Entendendo node js',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				nota: 10,
				imageLanguage: js
			},
			{
				title: 'Entendendo node js',
				nivel: '1',
				serie: '1º Ano',
				status: 'Entregue',
				nota: 10,
				imageLanguage: js
			}
		]
	}
````

**Professor**

- Matricula: 145789

````json5
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
		activy: [],
		class: [
			{
				registration: 64565768,
				name: 'Joao Victor',
				email: 'joaovictor@gmail.com',
				type: 'Aluno',
				dateBirth: '12-08-1960',
				serie: 3,
				level: 5,
				task_complete: 4,
				avatar: AvatarImage,
				total_task: 8,
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
						nota: 10,
						imageLanguage: js
					},
					{
						title: 'Entendendo node js',
						nivel: '1',
						serie: '1º Ano',
						status: 'Entregue',
						nota: 10,
						imageLanguage: js
					}
				]
			},
			{
				registration: 34563,
				name: 'Rafael',
				email: 'rafael@gmail.com',
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
						nota: 10,
						imageLanguage: js
					},
					{
						title: 'Entendendo node js',
						nivel: '1',
						serie: '1º Ano',
						status: 'Entregue',
						nota: 10,
						imageLanguage: js
					}
				]
			},
			{
				registration: 54534665,
				name: 'Matheus Reis',
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
						nota: 10,
						imageLanguage: js
					},
					{
						title: 'Entendendo node js',
						nivel: '1',
						serie: '1º Ano',
						status: 'Entregue',
						nota: 10,
						imageLanguage: js
					}
				]
			},

			{
				registration: 54534665,
				name: 'Matheus Reis',
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
						nota: 10,
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
		]
	},
````