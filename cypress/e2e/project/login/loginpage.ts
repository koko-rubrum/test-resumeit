class LoginPage {
    elements = {
        inputEmail:()=>cy.get('[name="email"]'),
        inputPassword:()=>cy.get('[name="password"]'),
        loginBtnSubmit:()=>cy.get('[data-cy="login-submit"]'),
        errorMessage:()=>cy.get('.h-8 > .text-sm'),
    }

    typeEmail(email){
        this.elements.inputEmail().type(email);
    }

    typePassword(password){
        this.elements.inputPassword().type(password);
    }

    clickLoginBtn(){
        this.elements.loginBtnSubmit().click();
    }
}

export default new LoginPage();