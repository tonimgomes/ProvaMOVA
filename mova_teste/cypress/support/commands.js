Cypress.Commands.add('verificarQuantidadeResultados', ()=>{
    // Encontra todos os elementos "li" dentro do elemento com classe "react-results--main"
    cy.get('.react-results--main li').then(($resultados)=>{
        // Obtém a quantidade de resultados encontrados
        const numResultados = $resultados.length;

        // Exibe um log com a quantidade de resultados
        cy.log(`Foram retornados ${numResultados} resultados`);
      });
});


Cypress.Commands.add('clicarPrimeiroSite', ()=>{
    // Encontra o primeiro elemento "a" dentro dos elementos "li" do elemento com classe "react-results--main"
    cy.get('.react-results--main li:first-child a').eq(0).click();

    // Exibe um log indicando que o primeiro resultado foi clicado
    cy.log('O primeiro resultado foi clicado');
});