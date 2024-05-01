import HomePage from "../home/pages/homepage";
import LoginPage from "./loginpage";

describe("A User Try to Login",()=>{
    it('Redirect to Main Page', () => {
        HomePage.goPage('/dashboard');
        cy.wait(500);
        cy.url().should('include', '/login');
    });
    it('Fail login', () => {
        HomePage.goPage('/');
        HomePage.elements.loginTabBtn().should('contain', 'Login');
        HomePage.clickLoginTab();
        LoginPage.elements.inputEmail().should('exist');
        LoginPage.typeEmail('omar@omar.com');
        LoginPage.typePassword('xyz');
        LoginPage.clickLoginBtn();
        LoginPage.elements.errorMessage().should('contain', 'Invalid credentials.');
    });
    it('Login Success', () => {
        cy.loginViaUi({ email: 'omar.fake@gmail.com', password: 'Testing123@'});
        cy.wait(500);
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
    });
});