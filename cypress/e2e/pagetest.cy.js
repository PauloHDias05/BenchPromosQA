describe('Teste de Página', () => {
  let env
  beforeEach(() => {
    cy.env([
      'urlbase'
    ]).then((values) => {
      env = values
      cy.visit(env.urlbase)
    })
    
  });
  it('benchmarks', () => {
    cy.get('nav').contains('Comparar').click()
    cy.contains('Desempenho real').click()
    cy.url().should('eq', env.urlbase + 'benchmarks')
  })
  it('compare', () => {
    cy.get('a[href*="/compare"]').click()
    cy.url().should('eq', env.urlbase + 'compare')
  })
  it('Recomendacoes', () => {
    cy.get('a[href*="/tier-lists"]').click()
    cy.url().should('eq', env.urlbase + 'tier-lists')
  })
  it('Sorteios', () => {
    cy.get('nav').contains('Sorteios').click()
    cy.url().should('eq', env.urlbase + 'sorteios')
  })
  it('Setups', () => {
    cy.contains('Setups').click()
    cy.url().should('eq', env.urlbase + 'setups')
  })
  it('Encontrar Notebook', () => {
    cy.get('nav').contains('Guias').click()
    cy.get('nav').contains('Responda algumas perguntas').click()
    cy.url().should('eq', env.urlbase + 'encontrar-notebook')
  })
  
})
