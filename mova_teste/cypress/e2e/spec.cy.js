describe('Prova MOVA', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.visit('https://duckduckgo.com')
  })

  it('Teste 1: Digitar o termo "Bitcoin" e pressionar ENTER', () => {
    cy.get('input[name = "q"]').type('Bitcoin{enter}');
    cy.log('Realizada a busca ao pressionar ENTER');

    cy.verificarQuantidadeResultados()

    cy.clicarPrimeiroSite()

    
    const timestamp = Date.now();
    const dateObj = new Date(timestamp);
    cy.screenshot(`PrimeiroResultado_ENTER ${dateObj}`);
  });

  it('Teste 2: Digitar o termo "Bitcoin" e pressionar a lupa', () => {
    cy.get('input[name = "q"]').type('Bitcoin');
    cy.get('.searchbox_searchButton__F5Bwq').click();
    cy.log('Realizada a busca ao pressionar a lupa');

    cy.verificarQuantidadeResultados()

    cy.clicarPrimeiroSite()
    const timestamp = Date.now();
    const dateObj = new Date(timestamp);
    cy.screenshot(`PrimeiroResultado_LUPA ${dateObj}`);
  });
  
})