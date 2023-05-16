# Ferramenta de Atualização de Preços em Massa

Este repositório contém uma ferramenta de atualização de preços em massa para uma empresa de e-commerce. A ferramenta permite que os usuários carreguem um arquivo CSV com os códigos de produto e os novos preços desejados. Antes de realizar a atualização, são aplicadas diversas verificações para garantir que as regras de negócio sejam respeitadas.

## Instalação

1. Clone este repositório: `git clone https://github.com/leozanette/shopper.git`
2. Navegue até o diretório do projeto: `cd shopper`
3. Suba o container do MySQL: `npm run docker`
4. Instale as dependencias, suba o backend e rode as migrations: `npm run start-backend`
5. Instale as dependencias, suba o frontend: `npm run start-frontend`
6. Abra o aplicativo no seu navegador: http://localhost:3000.

## Configuração

1. Crie um arquivo `.env` na raiz do diretório `server`.
2. Defina as seguintes variáveis de ambiente no arquivo `.env`:
