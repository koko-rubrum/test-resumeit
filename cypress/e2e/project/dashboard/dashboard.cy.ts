
import HomePage from "../home/pages/homepage";
describe("Go To DashBoard",()=>{
    it('Login Success and redirect to dashboard', () => {
        HomePage.goPage('/');
        cy.loginViaUi({ email: 'omar.fake@gmail.com', password: 'Testing123@'});
        cy.wait(500);
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
    });
});


