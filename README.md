# microfront-with-craco
##  Objetivo
O projeto tenta demonstrar de forma simples a criação e consumo de microfrontends

## Contexto
Nesse projeto temos apenas um microfrontend e um container (consumidor do microfrontend), mas poderíamos ter diversos.
O microfrontend é um botão simples, que pode receber sua cor como props e um callback para o evento do click e seu comportamento padrão é que depois de clicado ele deve ficar 2 segundos desabilitado.

Podemos executar apenas o microfrontend:

Ou também podemos executar o container, consumir o microfrontend e poder utilizá-lo como se fosse um componente interno da aplicação:


## Por que devo utilizar microfrontends?
- Permite reutilizar componentes entre várias aplicações diferentes, delimitando o domínio de cada aplicações frontend;
- Maior facilidade na implementação de novas features e em correção de bugs;
- Permite maior independência entre squads;


## ✨ Como Rodar
Criar o arquivo .env dentro da pasta frontend-container com:
```
PORT=3000
```

Criar o arquivo .env dentro da pasta microfrontends com:
```
PORT=3001
```
Executar em ambas as pastas
```
yarn
```
Executar em ambas as pastas
```
yarn run start
```
