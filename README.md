# 📚 Sistema de notas

Este é um sistema completo desenvolvido para permitir a um professor (Carlos) inserir as notas e a frequência de alunos, calcular automaticamente médias por aluno e por disciplina, e destacar alunos com desempenho acima da média ou frequência insuficiente.

## 🗂 Estrutura do Projeto

- `notas-api/`: Backend com Spring Boot (Java 17 + Maven)
- `gerenciador-notas-react/`: Frontend com React

## 🚀 Como executar o sistema

### Pré-requisitos

- [Java 17+](https://adoptium.net/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
- [Maven](https://maven.apache.org/)
- [Git](https://git-scm.com/)

### Passo a passo

1. Clone o repositório:

No terminal/bash:
https://github.com/FelipeSilva96/Sistema-de-notas.git
cd Sistema-de-notas

2. Execute o backend (notas-api):

cd notas-api
mvn spring-boot:run

3. Execute o frontend (gerenciador-notas-react):

cd ../gerenciador-notas-react
npm install
npm start

O frontend estará disponível em: http://localhost:3000

✅ Funcionalidades:

Cadastro de alunos com 5 notas (de 0 a 10) e frequência percentual (0 a 100%)

Cálculo automático da média individual do aluno

Cálculo da média da turma por disciplina

Cálculo da frequência geral por aluno

Listagem de:

Alunos com média acima da média geral

Alunos com frequência abaixo de 75%

📌 Premissas

As notas devem estar entre 0 e 10

A frequência deve estar entre 0% e 100%

Não há persistência em banco de dados (a aplicação é de demonstração, com dados em memória)

Spring Boot foi usado para o backend pela robustez e simplicidade no desenvolvimento de APIs REST

React foi escolhido para o frontend pela flexibilidade e facilidade na criação de interfaces reativas

A comunicação entre frontend e backend é feita localmente, mas pode ser facilmente adaptada para produção
