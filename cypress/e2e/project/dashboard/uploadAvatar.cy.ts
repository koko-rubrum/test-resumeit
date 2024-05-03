
import HomePage from "../home/pages/homepage";
import DashBoardPage from "./dashboardpage";

describe("Go To DashBoard and Edit User Info",()=>{
     beforeEach("login users",()=>{
        HomePage.goPage('/');
        cy.loginViaUi({ email: 'omar.fake@gmail.com', password: 'Testing123@'});
        cy.wait(500);
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
     });

     it('Upload Avatar', () => {
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
        DashBoardPage.elementsGeneral.addImageBtn().should('exist');
        DashBoardPage.openImageForm();
        DashBoardPage.addAvatarFile('cypress/fixtures/user.jpeg');
        cy.wait(300);
        DashBoardPage.clickSubmitavatar();
    });

    
});


