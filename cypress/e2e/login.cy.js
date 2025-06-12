describe('login',()=> {
    it("login com sucesso", () => {
        // 1- Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        // 2- Preencher email válido
        cy.get('#user').type('eduardo2@gmail.com', {delay:50})
        // 3- Preencher senha válida
        cy.get('#password').type('22213123', {delay:30})
        // 4- Fazer login
        cy.get('#btnLogin').click();
        // 5- deve logar na aplicação e mostrar uma mensagem
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    });

    it("Email inválido", () =>  {
        // 1- Acessar a tela de login
         cy.visit('https://automationpratice.com.br/login')
         cy.wait(5000)
        // 2- Preencher email inválido
        cy.get('#user').type('dgdsgdsfgwfsfsdf', {delay:50})
         // 3- Preencher senha válida
        cy.get('#password').type('22213123', {delay:30})
         // 4- Fazer login
        cy.get('#btnLogin').click();
        // 5- Não deve logar na aplicação e mostrar uma mensagem
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

    })

    it('Senha inválida', ()  => {
          // 1- Acessar a tela de login
         cy.visit('https://automationpratice.com.br/login')
         cy.wait(5000)
        // 2- Preencher email válido
        cy.get('#user').type('eduardo2@gmail.com', {delay:50})
         // 3- Preencher senha válida
        cy.get('#password').type('0', {delay:30})
         // 4- Fazer login
        cy.get('#btnLogin').click();
        // 5- Não deve logar na aplicação e mostrar uma mensagem
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })
})

