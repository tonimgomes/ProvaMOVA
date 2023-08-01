describe('Prova MOVA', () => {
  beforeEach(() => {
    // Antes de cada teste, visita o site "https://duckduckgo.com"
    cy.visit('https://duckduckgo.com')
  })

  it('Teste 1: Digitar o termo "Bitcoin" e pressionar ENTER', () => {
     // Digita o termo "Bitcoin" no campo de busca e pressiona a tecla ENTER
    cy.get('input[name = "q"]').type('Bitcoin{enter}');
    cy.log('Realizada a busca ao pressionar ENTER');

     // Chama a função verificarQuantidadeResultados para verificar a quantidade de resultados retornados
    cy.verificarQuantidadeResultados()

    // Chama a função clicarPrimeiroSite para clicar no primeiro site da lista de resultados
    cy.clicarPrimeiroSite()

     // Tira um screenshot da tela após clicar no primeiro site e salva com um nome específico
    const timestamp = Date.now();
    const dateObj = new Date(timestamp);
    cy.screenshot(`PrimeiroResultado_ENTER ${dateObj}`);
  });

  it('Teste 2: Digitar o termo "Bitcoin" e pressionar a lupa', () => {
    // Digita o termo "Bitcoin" no campo de busca
    cy.get('input[name = "q"]').type('Bitcoin');

    // Clica na lupa para realizar a busca
    cy.get('.searchbox_searchButton__F5Bwq').click();
    cy.log('Realizada a busca ao pressionar a lupa');

    // Chama a função verificarQuantidadeResultados para verificar a quantidade de resultados retornados
    cy.verificarQuantidadeResultados()

    // Chama a função clicarPrimeiroSite para clicar no primeiro site da lista de resultados
    cy.clicarPrimeiroSite()

    // Tira um screenshot da tela após clicar no primeiro site e salva com um nome específico
    const timestamp = Date.now();
    const dateObj = new Date(timestamp);
    cy.screenshot(`PrimeiroResultado_LUPA ${dateObj}`);
  });
  
})