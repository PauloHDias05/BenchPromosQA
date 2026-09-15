# 🧪 Projeto de QA — Bench Promos

Projeto completo de **Quality Assurance (QA)** aplicado a uma aplicação web, reunindo **testes manuais, testes automatizados, documentação de casos de teste, registro de bugs, evidências e execução automatizada em CI/CD**.

O objetivo deste repositório é demonstrar meus conhecimentos adquiridos até o momento, para que assim eu possa ingressar na vaga de Analista de Testes JR.

---

## 🎯 Objetivo

Validar as principais funcionalidades da aplicação através de testes manuais e automatizados, identificando possíveis falhas e documentando os resultados encontrados.

O projeto contempla:

- ✅ Testes manuais
- 🤖 Testes automatizados
- 🥒 Cenários utilizando BDD
- 🐞 Registro de bugs
- 📸 Evidências de testes
- 📊 Relatórios de execução
- 🔄 Integração contínua com GitHub Actions

---

## 🛠️ Tecnologias e Ferramentas

Cypress
Github Actions

**Práticas utilizadas:**

Testes Manuais • Testes Funcionais • E2E • BDD • Cypress • Bug Reporting • CI/CD

---

## 🧪 Testes Manuais

Os testes manuais foram documentados utilizando uma estrutura padronizada contendo:

- ID
- Épico
- Pré-condição
- Cenário BDD
- Resultado esperado
- Resultado obtido
- Status
- Indicação se o cenário está automatizado

### Exemplo

```gherkin
Dado que o usuário esteja na página inicial

Quando informar o nome de um produto existente na barra de pesquisa

Então o sistema deve exibir apenas produtos relacionados ao termo pesquisado
```

---

## 🤖 Testes Automatizados

Parte dos cenários do projeto foi automatizada utilizando **Cypress**.

Os testes automatizados validam fluxos da aplicação diretamente pelo navegador, verificando elementos, navegação e comportamentos esperados.

---

## 🔄 CI/CD — GitHub Actions

O projeto possui integração com **GitHub Actions**.

A cada `push` realizado na branch `main`, o pipeline executa automaticamente os testes Cypress.

Isso permite identificar automaticamente se alguma alteração causou falha nos cenários cobertos pela automação.

---

## 🐞 Bugs Encontrados

Durante os testes manuais da funcionalidade de busca foram identificados **2 bugs**.
Os bugs encontrados foram documentados com **passos para reprodução, resultado esperado, resultado obtido, severidade e evidências**.

---

## 📸 Evidências

Os bugs possuem evidências visuais armazenadas junto à documentação.

---

## 💡 Conhecimentos Aplicados

Durante o desenvolvimento deste projeto foram aplicados conhecimentos em:

- Planejamento de testes
- Criação de casos de teste
- BDD
- Testes funcionais
- Testes E2E
- Automação com Cypress
- Registro e documentação de bugs
- Evidências de testes
- CI/CD
- GitHub Actions

---

## 👨‍💻 Autor

**Paulo Dias**

Projeto desenvolvido para estudo e construção de portfólio profissional na área de **Quality Assurance (QA)**.

---
