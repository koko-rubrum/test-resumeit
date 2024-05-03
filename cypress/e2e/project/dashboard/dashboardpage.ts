class DashBoardPage{
    elementsGeneral ={
        addImageBtn: ()=>cy.get('.relative>[data-cy="image-edit"]'),
        editUserInfoBtn: ()=>cy.get('[data-cy="user-edit"]'),
        summaryUiBtn: ()=>cy.get('[data-cy="summary-edit"]'),
        langUiEditBtn: ()=>cy.get('[data-cy="languages-edit"]'),
        expUiEditBtn: ()=>cy.get('[data-cy="experience-edit"]'),
        linksUiEditBtn: ()=>cy.get('[data-cy="links-edit"]'),
        eduUiEditBtn: ()=>cy.get('[data-cy="education-edit"]'),
        hardUiEditBtn: ()=>cy.get('[data-cy="hard-edit"]'),
        softUiEditBtn: ()=>cy.get('[data-cy="soft-edit"]'),
        addFile: ()=>cy.get('[data-cy="add-resume"]'),
        resumeFile: ()=>cy.get('[data-cy="upload-file"]'),
        submitFile: ()=>cy.get('[data-cy="submit-file"]'),
        submitfinish: ()=>cy.get('[data-cy="submit-finish"]'),
    };

    elementsUserInfo = {
        inputName: ()=>cy.get('[name="name"]'), 
        inputUserName: ()=>cy.get('[name="userName"]'), 
        inputPhone: ()=>cy.get('[name="phone"]'),
        inputCountry: ()=>cy.get('[name="countryCode"]'),
        btnSubmitUserInfo: ()=>cy.get('[data-cy="userInfo-edit"]'),
        nameLiUserInfo: ()=>cy.get('.grid > :nth-child(1)'),
        errorUserName: ()=>cy.get(':nth-child(2) > #customer-error > .mt-2'),
    }

    elementsSummary = {
        summaryForm:()=>cy.get('.block > .mb-2'),
        qlEditorSummary:()=>cy.get('.ql-editor'),
        summaryBtn: ()=>cy.get('[data-cy="summary-next"]'), 
        summarySubmit: ()=>cy.get('[data-cy="summary-next"]'), 
    };

    elementsLang = {
        addLangBtn: ()=>cy.get('[data-cy="add-lang"]'), 
        submitLangBtn: ()=>cy.get('[data-cy="submit-lang"]'), 
    }

    elementsExp = {
        addExpBtn: ()=>cy.get('[data-cy="add-exp"]'), 
        submitExpBtn: ()=>cy.get('[data-cy="update-exp"]'),  
    }

    elementsLinks = {
        addLinkBtn: ()=>cy.get('[data-cy="add-link"]'), 
        submitLinkBtn: ()=>cy.get('[data-cy="submit-link"]'), 
    }

    elemtsEdu = {
        addEduBtn: ()=>cy.get('[data-cy="add-exp"]'), 
        submitEduBtn: ()=>cy.get('[data-cy="update-exp"]'),
    }

    elementsHard = {
        addHardBtn: ()=>cy.get('[data-cy="add-hard"]'), 
        submitHardBtn: ()=>cy.get('[data-cy="submit-hard"]'),
    }

    elementsSoft = {
        addSoftBtn: ()=>cy.get('[data-cy="add-soft"]'), 
        submitSoftBtn: ()=>cy.get('[data-cy="submit-soft"]'),
    }

    elementsAvatar = {
        imageFile: ()=>cy.get('[data-cy="image-file"]'),
        imagesubmit: ()=>cy.get('[data-cy="image-submit"]'),
    }

    openImageForm(){
        this.elementsGeneral.addImageBtn().click();  
    }

    openUserInfoForm(){
        this.elementsGeneral.editUserInfoBtn().click();  
    }

    openEditSummary(){
        this.elementsGeneral.summaryUiBtn().click();  
    }

    openEditLang(){
        this.elementsGeneral.langUiEditBtn().click();  
    }

    openEditExp(){
        this.elementsGeneral.expUiEditBtn().click();  
    }

    openEditLinks(){
        this.elementsGeneral.linksUiEditBtn().click();  
    }

    openEditEdu(){
        this.elementsGeneral.eduUiEditBtn().click();  
    }

    openEditHard(){
        this.elementsGeneral.hardUiEditBtn().click();  
    }

    openEditSoft(){
        this.elementsGeneral.softUiEditBtn().click();  
    }

    submitSummary(){
       this.elementsSummary.summarySubmit().click(); 
    }

    clickOptionsFile(){
        this.elementsGeneral.addFile().click();
    }

    addResumefile(file){
        this.elementsGeneral.resumeFile().selectFile(file);
    }

    clickSubmitFile(){
        this.elementsGeneral.submitFile().click();
    }

    clickSubmitFinish(){
        this.elementsGeneral.submitfinish().click();
    }

    typeNameUserInfo(name){
        this.elementsUserInfo.inputName().focus().clear().type(name);
    }

    typeUserName(userName){
        this.elementsUserInfo.inputUserName().focus().clear().type(userName);
    }

    typePhoneUserInfo(phone){
        this.elementsUserInfo.inputPhone().focus().clear().type(phone);
    }

    selectCountry(country){
        this.elementsUserInfo.inputCountry().select(country);
    }

    clickEditUserInfo(){
        this.elementsUserInfo.btnSubmitUserInfo().click();
    }

    addAvatarFile(file){
        this.elementsAvatar.imageFile().selectFile(file);
    }

    clickSubmitavatar(){
        this.elementsAvatar.imagesubmit().click();
    }


}
export default new DashBoardPage();