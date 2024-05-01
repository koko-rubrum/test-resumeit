class HomePage{
    elements ={
        regTabBtn:()=>cy.get('[data-cy="register-tab"]'),
        loginTabBtn:()=>cy.get('[data-cy="login-tab"]'),
        inputEmail:()=>cy.get('[name="email"]')
    }
    

    goPage(urlPage){
        cy.visit(urlPage);
    }

    clickRegTab(){
        this.elements.regTabBtn().click();
    }

    clickLoginTab(){
        this.elements.loginTabBtn().click();
    }
}
export default new HomePage();