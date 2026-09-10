describe('Login e Cadastro', () => {
 let env
  beforeEach(() => {
   
    cy.env([
      'email_invalido',
      'senha_padrao',
      'senha_errada', 
      'senha_menor8',
      'email_padrao',
      'nome',
      'login',
      'urlbase'

    ]).then((values) => {
      env = values
      cy.visit(env.urlbase)
      cy.get('a[href*="/login"]', { timeout: 40000 }).click({ timeout: 5000 })
     cy.url().should('eq', env.urlbase + 'login')
    })
    
  })

  context('Cenários de Login', () => {
    it('Login com sucesso', () => {
      cy.get('[name="email"]').type(env.login.username)
      cy.get('[name="password"]').type(env.login.password2 + '{enter}')
      cy.url().should('eq', env.urlbase)
    })
    it('Tentar logar com senha com menos de 8 caracteres', () => {
      cy.get('[name="email"]').type(env.login.username)
      cy.get('[name="password"]').type('123456')
      cy.get('.space-y-4 > .border-transparent').click()
      cy.get('.text-destructive').should('contain', 'A senha deve ter no minimo 8 caracteres')
    })

    it('Tentar logar com credenciais inválidas', () => {
      cy.get('[name="email"]').type(env.login.username)
      cy.get('[name="password"]').type(env.senha_errada + '{enter}')
      cy.contains('Invalid email or password').should('be.visible')
    })
  })

  context('Cenários de Cadastro', () => {
    beforeEach(() => {
      cy.contains('Criar conta').click()
    })

    it('Validar alerta nativo quando e-mail não contém @', () => {
      cy.get('[name="name"]').type(env.nome)
      cy.get('[name="email"]').type(env.email_invalido)
      cy.get('[name="password"]').type(env.senha_padrao)
      cy.get('.border-transparent').click()

      cy.get('input[name="email"]')
      .invoke('prop', 'validationMessage')
      .should('match', /Inclua um "@" no endereço de e-mail/);
    })

    it('Validar erro de senha menor que 8 caracteres no cadastro', () => {

      const email = `teste${Date.now()}@gmail.com`

      cy.get('[name="name"]').type(env.nome)
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(env.senha_menor8)
      cy.get('.border-transparent').click()

      cy.contains('A senha deve ter no minimo 8 caracteres').should('be.visible')
    })

    it('Validar erro de nome menor que 2 caracteres', () => {

      const email = `teste${Date.now()}@gmail.com`

      cy.get('[name="password"]').type(env.senha_padrao)
      cy.get('[name="email"]').type(email)
      cy.get('.border-transparent').click()

      cy.contains('O nome deve ter no minimo 2 caracteres').should('be.visible')
    })

    it('Validar erro de e-mail inválido', () => {
      cy.get('[name="name"]').type(env.nome)
      cy.get('.border-transparent').click()

      cy.contains('E-mail invalido').should('be.visible')
    })

    it('Validar mensagem quando usuário já existe', () => {
      cy.get('[name="name"]').type(env.nome)
      cy.get('[name="email"]').type(env.email_padrao)
      cy.get('[name="password"]').type(env.senha_padrao)
      cy.get('.border-transparent').click()

      cy.get('div[data-title]').should('contain', 'User already exists. Use another email.')
    })
  })
})