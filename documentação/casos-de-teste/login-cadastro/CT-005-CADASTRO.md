# CT-005 - Cadastro com senha menor que 8 caracteres

## Épico

Login e Cadastro

## Pré-condição

Usuário deve estar na tela de cadastro.

## Cenário BDD

**Dado** que o usuário esteja na tela de cadastro

**Quando** informar nome válido, e-mail válido e senha com menos de 8 caracteres e tentar criar a conta

**Então** o sistema deve exibir a mensagem "A senha deve ter no minimo 8 caracteres"

## Resultado Esperado

O cadastro deve ser impedido e a mensagem "A senha deve ter no minimo 8 caracteres" deve ser exibida.

## Resultado Obtido

O mesmo que o esperado.

## Status

APROVADO

## Automatizado

SIM