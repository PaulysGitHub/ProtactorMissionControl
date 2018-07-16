var LoginPage = require("../../page-objects/1_login_page/login_page");

describe("Login Page Tests", function() {
    var loginPage;

    beforeEach(function() {
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");
    });

    afterEach(function() {});

    it("should load the correct URL", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it("should return error if not login with a user name", function() {
        loginPage.enterLoginKeys.sendKeys(" ");
        loginPage.enterPasswordKeys.sendKeys("this");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
    });

    it("should return error if not login with a password", function() {
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys(" ");
        loginPage.clickLoginBtn.click();

        browser.sleep(2000);
    });

    it("should return error if not login with username and password", function() {
        loginPage.enterLoginKeys.sendKeys(" ");
        loginPage.enterPasswordKeys.sendKeys(" ");
        loginPage.clickLoginBtn.click();
        

        browser.sleep(2000);
    });

    it("should return error if not using a valid user name", function() {
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.com");
        loginPage.enterPasswordKeys.sendKeys("this");
        loginPage.clickLoginBtn.click();
        expect(loginPage.wrongEmailAlert.isDisplayed()).toBe(true);
        expect(loginPage.wrongEmailAlertMsg1.getText()).toEqual("User Does Not Exist");
        expect(loginPage.wrongEmailAlertMsg2.getText()).toEqual("We can't find a user for the email address paul.laguna@thisisnom.com");
 

        browser.sleep(2000);
    });

    it("should return error if not using a valid password", function() {
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("djtanner1988");
        loginPage.clickLoginBtn.click();
        expect(loginPage.wrongPasswordAlert.isDisplayed()).toBe(true);
        expect(loginPage.wrongPasswordAlertMsg1.getText()).toEqual("Invalid Password");
        expect(loginPage.wrongPasswordAlertMsg2.getText()).toEqual("We can't validate the password provided.")

        browser.sleep(2000);
    });

    it("should return error if not using valid user name and password", function() {
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.com");
        loginPage.enterPasswordKeys.sendKeys("djtanner1988");
        loginPage.clickLoginBtn.click();
        expect(loginPage.wrongEmailAlert.isDisplayed()).toBe(true);
        expect(loginPage.wrongEmailAlertMsg1.getText()).toEqual("User Does Not Exist");
        expect(loginPage.wrongEmailAlertMsg2.getText()).toEqual("We can't find a user for the email address paul.laguna@thisisnom.com");

        browser.sleep(2000);
    });

    it("should generate succesful login", function() {
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom");
        loginPage.clickLoginBtn.click();

        browser.sleep(2000);
    });
});
