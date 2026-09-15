## Plano de Teste - BenchPromos V3

1. Identificação do Projeto

Projeto: BenchPromos V3
Tipo de aplicação: Aplicação Web
Responsável pelos testes: QA
Objetivo: Validar as principais funcionalidades do sistema, garantindo que os fluxos de login, cadastro, navegação e busca de produtos funcionem conforme o esperado.

2. Objetivo do Plano de Teste

Este plano de teste tem como objetivo definir a estratégia, o escopo e os critérios utilizados para validar as funcionalidades principais do BenchPromos V3.

Os testes contemplam cenários funcionais positivos e negativos, incluindo testes automatizados com Cypress e testes manuais.

3. Escopo dos Testes

Serão testados os seguintes épicos:

Login e Cadastro

Navegação de Páginas

Busca de Produtos

4. Funcionalidades Testadas

4.1 Login e Cadastro

Serão validados os seguintes cenários:

CT-001 - Login com sucesso

CT-002 - Login com senha menor que 8 caracteres

CT-003 - Login com credenciais inválidas

CT-004 - Cadastro com e-mail sem @

CT-005 - Cadastro com senha menor que 8 caracteres

CT-006 - Cadastro com nome menor que 2 caracteres

CT-007 - Cadastro com e-mail inválido

CT-008 - Cadastro com usuário já existente

Tipo de execução: Automatizada
Ferramenta: Cypress

4.2 Navegação de Páginas

Serão validados os seguintes cenários:

CT-001 - Acessar página de Benchmarks

CT-002 - Acessar página de Comparação

CT-003 - Acessar página de Recomendações

CT-004 - Acessar página de Sorteios

CT-005 - Acessar página de Setups

CT-006 - Acessar página Encontrar Notebook

Tipo de execução: Automatizada
Ferramenta: Cypress

4.3 Busca de Produtos

Serão validados os seguintes cenários:

CT-001 - Buscar produto existente

CT-002 - Buscar produto inexistente

CT-003 - Buscar produto utilizando parte do nome

CT-004 - Validar sugestões da busca

CT-005 - Realizar busca com campo vazio

CT-006 - Selecionar produto nos resultados da busca

Tipo de execução: Manual

5. Tipos de Teste

Serão executados:

Testes funcionais

Testes positivos

Testes negativos

Testes de validação de campos

Testes de navegação

Testes manuais

Testes automatizados

Testes de regressão dos fluxos automatizados

6. Ambiente de Teste

Aplicação

BenchPromos V3

Navegador

Google Chrome

Automação

Cypress

Editor de código

Visual Studio Code

Controle de versão

Git e GitHub

Integração Contínua

GitHub Actions

7. Estratégia de Teste

Testes Automatizados

Os testes dos épicos Login e Cadastro e Navegação de Páginas serão executados com Cypress.

Os testes automatizados devem validar:

Interação com elementos da interface

Validação de mensagens de erro

Redirecionamento entre páginas

URLs esperadas

Regras de validação dos formulários

Serão automatizados pois se tratam de funcionalidades críticas.

As execuções automatizadas também poderão ser realizadas através do GitHub Actions.

Testes Manuais

Os testes do épico Busca de Produtos serão executados manualmente.

Durante a execução serão observados:

Resultados apresentados na busca

Correspondência entre o termo pesquisado e os produtos sugeridos

Comportamento para buscas inválidas

Sugestões automáticas

Navegação ao selecionar um produto

Serão feitos manualmente pois além de não ser uma funcionalidade crítica, é preciso verificar todas as possíveis sugestões de busca e realizar pesquisa com diferentes termos

8. Critérios de Entrada

Os testes poderão ser iniciados quando:

A aplicação estiver disponível para acesso

As principais páginas estiverem carregando corretamente

Os elementos necessários para execução estiverem disponíveis

O ambiente de testes estiver funcionando

As variáveis utilizadas na automação estiverem configuradas

O Cypress estiver instalado e configurado

9. Critérios de Aprovação

Um caso de teste será considerado APROVADO quando:

O resultado obtido for igual ao resultado esperado

Não ocorrer erro durante o fluxo

As mensagens esperadas forem apresentadas corretamente

O redirecionamento ocorrer para a página correta

Um caso será considerado REPROVADO quando:

O resultado obtido for diferente do esperado

A funcionalidade não responder corretamente

Uma mensagem incorreta for apresentada

O sistema apresentar comportamento inesperado

10. Critérios de Saída

A execução será considerada concluída quando:

Todos os casos planejados forem executados

Os resultados forem registrados

Os casos reprovados possuírem bug documentado

As evidências necessárias forem anexadas

Os testes automatizados forem executados com sucesso

11. Registro de Bugs

Quando um caso de teste apresentar comportamento diferente do esperado, deverá ser criado um registro de bug.

Cada bug deverá conter:

ID do bug

Título

Caso de teste relacionado

Pré-condição

Passos para reprodução

Resultado esperado

Resultado obtido

Severidade

Status

Evidências

12. Evidências

As evidências poderão ser registradas por meio de:

Capturas de tela

Vídeos

Relatórios de execução

Logs do Cypress

Relatórios do GitHub Actions

As evidências relacionadas a bugs deverão ser armazenadas junto ao arquivo do bug correspondente.

13. Riscos

Alguns riscos que podem afetar a execução dos testes:

Indisponibilidade da aplicação

Alteração de seletores da interface

Mudanças nas regras de negócio

Dados de teste inválidos

Instabilidade de rede

Alteração de mensagens exibidas pelo sistema

Mudanças de layout que afetem os testes automatizados

14. Responsabilidades

QA

Responsável por:

Criar os casos de teste

Executar os testes manuais

Desenvolver e manter os testes automatizados

Registrar bugs

Coletar evidências

Executar testes de regressão

Atualizar a documentação

15. Entregáveis

Ao final do processo de testes deverão estar disponíveis:

Plano de teste

Casos de teste

Testes automatizados em Cypress

Bugs documentados

Evidências

Relatório dos testes automatizados

Histórico de execução através do GitHub Actions

16. Resumo da Cobertura

Épico

Quantidade de Casos

Tipo

Login e Cadastro

8

Automatizado

Navegação de Páginas

6

Automatizado

Busca de Produtos

6

Manual

Total

20

Manual + Automatizado

17. Status do Plano

Status: Finalizado

O plano poderá ser atualizado conforme novos épicos, funcionalidades e casos de teste forem adicionados ao projeto.