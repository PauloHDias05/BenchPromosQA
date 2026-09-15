# CT-008 - Cadastro com usuário já existente

## Épico

Login e Cadastro

## Pré-condição

Usuário deve estar na tela de cadastro e possuir um e-mail já cadastrado no sistema.

## Cenário BDD

**Dado** que o usuário esteja na tela de cadastro

**Quando** informar nome válido, e-mail já cadastrado e senha válida e tentar criar a conta

**Então** o sistema deve impedir o cadastro e exibir a mensagem "User already exists. Use another email."

## Resultado Esperado

O sistema deve impedir a criação da conta e informar que o usuário já existe.

## Resultado Obtido

O mesmo que o esperado.

## Status

APROVADO

## Automatizado

SIM