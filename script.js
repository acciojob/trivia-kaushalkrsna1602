//your code here
cy.visit(baseUrl + "/main.html");
cy.get('blockquote').should('have.attr', 'cite', 'https://en.wikipedia.org/wiki/New_Delhi');
