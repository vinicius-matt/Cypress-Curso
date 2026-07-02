# Cypress do Zero à Nuvem

Este projeto é um exemplo simples de automação de testes com Cypress, baseado no curso "Cypress, do Zero à Nuvem".

## Estrutura do projeto

- `cypress/e2e/` — arquivos de testes end-to-end
- `cypress/support/` — suporte e configurações para os testes
- `src/` — aplicação de exemplo usada nos testes

## Requisitos

- Node.js
- npm

## Instalação

```bash
npm install
```

## Como executar

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar os testes no terminal:

```bash
npm test
```

## Testes mobile

```bash
npm run cy:open:mobile
npm run test:mobile
```
