[README.md](https://github.com/user-attachments/files/34400365/README.md)
# Banco API - Testes Automatizados

Projeto de automação de testes funcionais para a API REST do [Banco API](https://github.com/juliodelimas/banco-api), desenvolvido em JavaScript com Node.js.

## Objetivo

Validar automaticamente o comportamento dos endpoints da API bancária, verificando respostas e regras de negócio por meio de requisições HTTP e asserções. A suíte foi estruturada para apoiar a identificação de falhas e aumentar a confiança na qualidade da API.

> **Projeto sob teste:** [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)  
> **Projeto de automação:** [fadcln/Banco-api-testes-automatizados](https://github.com/fadcln/Banco-api-testes-automatizados)

## Stack utilizada

| Tecnologia | Finalidade |
|---|---|
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | Linguagem utilizada na implementação dos testes. |
| [Node.js](https://nodejs.org/docs/latest/api/) | Ambiente de execução JavaScript fora do navegador. |
| [Mocha](https://mochajs.org/) | Test runner responsável por organizar e executar os testes. |
| [Supertest](https://github.com/ladjs/supertest) | Biblioteca para realizar requisições HTTP e testar APIs. |
| [Chai](https://www.chaijs.com/) | Biblioteca de asserções usada para verificar os resultados esperados. |
| [dotenv](https://github.com/motdotla/dotenv) | Carrega variáveis definidas no arquivo `.env` para `process.env`. |
| [Mochawesome](https://github.com/adamgruber/mochawesome) | Reporter do Mocha que gera relatórios HTML e JSON da execução. |

As versões declaradas no `package.json` deste repositório são: Chai `^6.3.0`, dotenv `^18.0.9`, Mocha `^12.0.3`, Mochawesome `^8.1.1` e Supertest `^7.3.1`. O arquivo `package-lock.json` registra a resolução das dependências.

## Estrutura de diretórios

```text
Banco-api-testes-automatizados/
├── fixtures/       # Dados de entrada e/ou dados utilizados pelos testes
├── helpers/        # Funções auxiliares e recursos reutilizáveis
├── testes/         # Suítes e casos de teste automatizados
├── .env            # Criado localmente pelo usuário; não versionado
├── .gitignore      # Ignora dependências, configurações locais e relatórios
├── package.json    # Dependências e scripts npm do projeto
└── package-lock.json
```

Os arquivos `.env`, `node_modules/` e `mochawesome-report/` são ignorados pelo Git. Os diretórios `fixtures`, `helpers` e `testes` concentram, respectivamente, dados de apoio, recursos reutilizáveis e os testes automatizados.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (o npm é disponibilizado junto com o Node.js).
- Git, para clonar o repositório.
- A API REST do projeto [Banco API](https://github.com/juliodelimas/banco-api) instalada e em execução.
- Acesso à URL da API que será testada.

## Configuração do ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/fadcln/Banco-api-testes-automatizados.git
cd Banco-api-testes-automatizados
```

### 2. Instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

### 3. Criar o arquivo `.env`

O arquivo `.env` não é disponibilizado no repositório. Cada pessoa que clonar o projeto deverá criá-lo manualmente na raiz, no mesmo nível do `package.json`.

Crie um arquivo chamado `.env` e informe a URL base da API REST:

```env
BASE_URL=http://localhost:3000
```

**Sobre `BASE_URL`:** essa variável indica o endereço-base do serviço que será testado. Se a API estiver sendo executada em outra máquina, porta ou ambiente, substitua o valor pela URL correspondente. Não coloque aspas em torno do valor, a menos que a configuração do seu ambiente exija isso.

O projeto utiliza `dotenv` para disponibilizar as variáveis do `.env` por meio de `process.env`. Não compartilhe nem versione arquivos `.env` que contenham credenciais ou informações sensíveis.

### 4. Iniciar a API sob teste

Antes de executar a automação, siga as instruções do repositório [Banco API](https://github.com/juliodelimas/banco-api) para configurar e iniciar a API REST. De acordo com a documentação desse projeto, a API REST utiliza, por padrão, a porta `3000`.

Confirme que o serviço está ativo e que o valor de `BASE_URL` corresponde ao endereço em que ele está sendo executado.

## Execução dos testes

Com as dependências instaladas, o `.env` configurado e a API em execução, execute na raiz do projeto:

```bash
npm test
```

O script `test`, definido no `package.json`, executa os arquivos de teste encontrados em `testes/**/*.test.js`, utiliza o Mocha e configura o tempo limite de cada teste para `200000` milissegundos (200 segundos). O reporter selecionado é o Mochawesome.

## Relatórios de execução

O Mochawesome gera relatórios com o resultado da execução, permitindo consultar informações como testes aprovados, reprovados, duração e detalhes de falhas.

O comando para executar os testes e gerar o relatório é:

```bash
npm test
```

Com a configuração padrão do Mochawesome, os arquivos são gerados no diretório:

```text
mochawesome-report/
```

O relatório HTML padrão pode ser aberto no navegador:

```text
mochawesome-report/mochawesome.html
```

O diretório de relatórios é criado durante a execução, caso necessário, e está listado no `.gitignore`; portanto, não é enviado ao repositório. Se a configuração do reporter for alterada futuramente, o caminho e o nome do arquivo gerado também poderão mudar.

## Dependências e documentação

- [Node.js — documentação oficial](https://nodejs.org/docs/latest/api/)
- [JavaScript — MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Mocha — documentação oficial](https://mochajs.org/)
- [Supertest — repositório e documentação](https://github.com/ladjs/supertest)
- [Chai — documentação oficial](https://www.chaijs.com/)
- [dotenv — repositório e instruções](https://github.com/motdotla/dotenv)
- [Mochawesome — repositório e documentação](https://github.com/adamgruber/mochawesome)
- [npm — documentação](https://docs.npmjs.com/)

## Observações

- A API sob teste precisa estar disponível antes da execução da suíte.
- O `.env` deve ser criado localmente por cada pessoa que utilizar o projeto.
- Não versione `node_modules`, `.env` ou os relatórios gerados.
- Para reproduzir a instalação com as versões resolvidas no projeto, utilize `npm install` com o `package-lock.json` mantido no repositório.

---

Desenvolvido como projeto de estudo e prática de **Quality Assurance (QA) e automação de testes de APIs REST**.
