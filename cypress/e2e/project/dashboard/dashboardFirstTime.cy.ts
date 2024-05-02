
import HomePage from "../home/pages/homepage";
import DashBoardPage from "./dashboardpage";
import userResume from '../../../fixtures/';

describe("Go To DashBoard new user",()=>{
     beforeEach("login users",()=>{
        HomePage.goPage('/');
        cy.loginViaUi({ email: 'omar.fake@gmail.com', password: 'Testing123@'});
        cy.wait(500);
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
     })
    it('Add Summary', () => {
      HomePage.goPage('/dashboard');
      cy.url().should('include', '/dashboard');
      DashBoardPage.elementsSummary.summaryForm().should('have.text', 'Add summary');
      DashBoardPage.elementsSummary.qlEditorSummary().type('summary text just for test the testing test');
      DashBoardPage.submitSummary();
      DashBoardPage.elementsGeneral.addFile().should('have.text', 'Agrega el archivo de tu resumen luevo vemos que mas');
      DashBoardPage.clickOptionsFile();
      DashBoardPage.elementsGeneral.resumeFile().should('exist');
      DashBoardPage.addResumefile('cypress/fixtures/omarrodriguez.pdf');
      cy.wait(3000);
      DashBoardPage.clickSubmitFile();
      cy.wait(3000);
      DashBoardPage.clickSubmitFinish();
    });
});


