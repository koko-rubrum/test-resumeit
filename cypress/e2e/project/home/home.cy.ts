import HomePage from "./pages/homepage";

describe("A User accesing resume it",()=>{
    it('Go to mainpage', () => {
        HomePage.goPage('/');
        HomePage.elements.regTabBtn().should('contain', 'Register');
        HomePage.elements.loginTabBtn().should('contain', 'Login');
        HomePage.clickLoginTab();
        HomePage.elements.inputEmail().should('exist');
    })
});