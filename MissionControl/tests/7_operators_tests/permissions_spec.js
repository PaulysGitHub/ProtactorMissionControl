var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");
var MainOprPage = require("../../page-objects/7_operators_page/mainOpr_page");
var InviteUserPage = require("../../page-objects/7_operators_page/inviteUsers_page");
var PermissionsPage = require("../../page-objects/7_operators_page/permissions_page");

describe("Automate Permissions page", function() {
    var naviPage;
    var loginPage;
    var mainOprPage;
    var inviteUserPage;
    var permissionsPage;

    beforeEach(function() {
        naviPage = new NaviPage();
        loginPage = new LoginPage();
        mainOprPage = new MainOprPage();
        inviteUserPage = new InviteUserPage();
        permissionsPage = new PermissionsPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");
        //Tim's version 
        // browser.get("http://eng-tim.nomdata.info/");

        //Rath's version

    });

    afterEach(function() {});

    it("Enter Permissions page after creating a new Operator", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(5000);
    });

    it("Enter Permissions page after creating a new Operator and click Overview Lnk Btn", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(5000);
        permissionsPage.permOverviewLnkBtn.click();
        browser.sleep(5000);

    });

    it("Enter Permissions page after creating a new Operator and click Activate Lnk Btn", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(5000);
        permissionsPage.permDeactivatePageLnk.click();
        browser.sleep(5000);

    });

    it("Enter Permissions page after creating a new Operator and click Admin Lnk Btn", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(5000);
        permissionsPage.permMakeAdminLnkBtn.click();

    });

    it("Enter Permissions page after creating a new Operator and check if Inactive or Deactivate", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(5000);
        // expect(permissionsPage.permVerifyActiveDeActive.isDisplayed()).toBe(true);

    });

    it("Enter Target List Permission None but with empty Adwords and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permTargetListsDropD.click();
        permissionsPage.permTargetChildNone.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
        // expect(permissionsPage.permVerifyActiveDeActive.isDisplayed()).toBe(true);
        
    });

    it("Enter Target List Permission Read but with empty Adwords and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permTargetListsDropD.click();
        permissionsPage.permTargetChildRead.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
        // expect(permissionsPage.permVerifyActiveDeActive.isDisplayed()).toBe(true);
        
    });
    
    it("Enter Target List Permission Write but with empty Adwords and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permTargetListsDropD.click();
        permissionsPage.permTargetChildWrite.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
        // expect(permissionsPage.permVerifyActiveDeActive.isDisplayed()).toBe(true);
        
    });

    it("Enter Target List Permission Admin but with empty Adwords and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permTargetListsDropD.click();
        permissionsPage.permTargetChildAdmin.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
        // expect(permissionsPage.permVerifyActiveDeActive.isDisplayed()).toBe(true);
        
    });

    it("Enter Adword List Permission None but with empty Target List and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permAdWordsDropD.click();
        permissionsPage.permAdWordsChildNone.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
});

    it("Enter Adword List Permission Read but with empty Target List and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permAdWordsDropD.click();
        permissionsPage.permAdWordsChildRead.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
});
    it("Enter Adword List Permission Write but with empty Target List and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permAdWordsDropD.click();
        permissionsPage.permAdWordsChildWrite.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
    });

    it("Enter Adword List Permission Admin but with empty Target List and Operators Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permAdWordsDropD.click();
        permissionsPage.permAdWordsChildAdmin.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
});

    it("Enter Operators List Permission None but with empty Target List and AdWords Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permOperatorsDropD.click();
        permissionsPage.permOperatorsChildNone.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
    });

    it("Enter Operators List Permission Read but with empty Target List and AdWords Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permOperatorsDropD.click();
        permissionsPage.permOperatorsChildRead.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
    });

    it("Enter Operators List Permission Write but with empty Target List and AdWords Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permOperatorsDropD.click();
        permissionsPage.permOperatorsChildWrite.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
    });

    it("Enter Operators List Permission Admin but with empty Target List and AdWords Dropdowns", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 1000) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
        permissionsPage.permOperatorsDropD.click();
        permissionsPage.permOperatorsChildAdmin.click();
        permissionsPage.permUpdateBtn.click();
        browser.sleep(5000);
    });

    // Now create more scenarios with combos for permissions
    

});