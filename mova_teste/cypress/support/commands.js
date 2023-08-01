Cypress.Commands.add('verificarQuantidadeResultados', ()=>{
    cy.get('.react-results--main li').then(($resultados)=>{
        const numResultados = $resultados.length;
        cy.log(`Foram retornados ${numResultados} resultados`);
      });
});


Cypress.Commands.add('clicarPrimeiroSite', ()=>{
    cy.get('.react-results--main li:first-child a').eq(0).click();
    cy.log('O primeiro resultado foi clicado');
});