var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");

describe("Navigation Left Window Pane Tests", function() {
    var naviPage;
    var loginPage;

    beforeEach(function() {
        naviPage = new NaviPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");
    });

    afterEach(function() {});

    it("should laod the correct URL", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
    });

    it("should navigate to Dashboard page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.dashboardNavLnk.isDisplayed()).toBe(true);
        naviPage.dashboardNavLnk.click();
        browser.sleep(2000);
    });

    it("should navigate to Targets List page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.targetListsNavLnk.isDisplayed()).toBe(true);
        naviPage.targetListsNavLnk.click();
        browser.sleep(2000);
    });

    it("should navigate to AdEngine page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.adEngineNavLnk.isDisplayed()).toBe(true);
        naviPage.adEngineNavLnk.click();
        browser.sleep(2000);
    });

    it("should navigate to AdExclusion page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.adExclusionNavLnk.isDisplayed()).toBe(true);
        naviPage.adExclusionNavLnk.click();
        browser.sleep(2000);
    });

    it("should navigate to Operators page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.operatorsNavLnk.isDisplayed()).toBe(true);
        naviPage.operatorsNavLnk.click();
        browser.sleep(2000);
    });

    it("should navigate to Settings page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.settingsNavLnk.isDisplayed()).toBe(true);
        naviPage.settingsNavLnk.click();
        browser.sleep(2000);
    });

    it("Should Logout of application by clicking Logout button", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        expect(naviPage.logoutNavLnk.isDisplayed()).toBe(true);
        naviPage.logoutNavLnk.click();
        browser.sleep(2000);
    })

})