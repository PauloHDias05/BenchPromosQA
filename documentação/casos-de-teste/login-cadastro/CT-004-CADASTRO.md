# CT-004 - Cadastro com e-mail sem @

## Épico

Login e Cadastro

## Pré-condição

Usuário deve estar na tela de cadastro.

## Cenário BDD

**Dado** que o usuário esteja na tela de cadastro

**Quando** informar nome válido, e-mail sem @ e senha válida e tentar criar a conta

**Então** o navegador deve impedir o envio e apresentar a mensagem nativa de validação do campo de e-mail

## Resultado Esperado

O navegador deve impedir o cadastro e informar que o endereço de e-mail precisa conter "@".

## Resultado Obtido

O mesmo que o esperado.

## Status

APROVADO

## Automatizado

SIM