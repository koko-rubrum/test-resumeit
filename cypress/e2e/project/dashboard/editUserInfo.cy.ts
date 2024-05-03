
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

     it('Edit user name Fail', () => {
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
        DashBoardPage.elementsGeneral.editUserInfoBtn().should('exist');
        DashBoardPage.openUserInfoForm();
        DashBoardPage.typeUserName('omar.fake6');
        DashBoardPage.clickEditUserInfo();
        DashBoardPage.elementsUserInfo.errorUserName().should('have.text','El nombre de usuario ya existe');
    });

    it('Edit user Info Success', () => {
        HomePage.goPage('/dashboard');
        cy.url().should('include', '/dashboard');
        DashBoardPage.elementsGeneral.editUserInfoBtn().should('exist');
        DashBoardPage.openUserInfoForm();
        DashBoardPage.typeNameUserInfo('omar edit cypress');
        DashBoardPage.typePhoneUserInfo('6621393007');
        DashBoardPage.selectCountry('MX');
        DashBoardPage.clickEditUserInfo();
        DashBoardPage.elementsUserInfo.nameLiUserInfo().should('have.text','omar edit cypress');
    });
});


