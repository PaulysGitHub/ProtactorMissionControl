var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");
var MainOprPage = require("../../page-objects/7_operators_page/mainOpr_page");
var InviteUserPage = require("../../page-objects/7_operators_page/inviteUsers_page");

describe("Invite Users/Operators Page Tests", function() {
    var naviPage;
    var loginPage;
    var mainOprPage;
    var inviteUserPage;

    beforeEach(function() {
        naviPage = new NaviPage();
        loginPage = new LoginPage();
        mainOprPage = new MainOprPage();
        inviteUserPage = new InviteUserPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");
        //Tim's version 
        // browser.get("http://eng-tim.nomdata.info/");

        //Rath's version
    });

    afterEach(function() {});

    it("should navigate to Invite User page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");

        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
    });

    it("should display error if submitting with out first name", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("Laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("paul.laguna@thisisnom.co");

        inviteUserPage.inviteUserBtn.click();
        browser.sleep(1000);
    });

    it("should display error if submitting with out last name", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("Paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("paul.laguna@thisisnom.co");
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });

    it("should display error if submitting with out email", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("Paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("Laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("");
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });

    it("should display error if submitting with out first and last name", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserLastNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("paul.laguna@thisisnom.co");
        browser.sleep(1000);
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });

    it("should display error if submitting with out first name, last name and email", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserLastNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("");
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });    
    
    it("should display error if submitting with out last name and email", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("Paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys(" ");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("");
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });

    it("should display error if submitting with out first name and email", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys("");
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    });

    it("should successfully create an Operator without permissions", function() {
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
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys(Math.floor(Math.random() * 100) + '@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(5000);
    })

    it("should return error if email you are using to create a new operator is already in use", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(1000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(1000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(1000);
        inviteUserPage.inviteUserFirstNameKeys.sendKeys("Paul");
        inviteUserPage.inviteUserLastNameKeys.sendKeys("Laguna");
        inviteUserPage.inviteUserEmailAddressKeys.sendKeys('paul.laguna@thisisnom.co');
        inviteUserPage.inviteUserBtn.click();

        browser.sleep(1000);
    })
});
