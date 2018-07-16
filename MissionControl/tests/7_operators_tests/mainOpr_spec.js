var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");
var MainOprPage = require("../../page-objects/7_operators_page/mainOpr_page");


describe("Navigation Left Window Pane Tests", function() {
    var naviPage;
    var loginPage;
    var mainOprPage;

    beforeEach(function() {
        naviPage = new NaviPage();
        loginPage = new LoginPage();
        mainOprPage = new MainOprPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");
        //Tim's version 
        // browser.get("http://eng-tim.nomdata.info/");

        //Rath's version
    });

    afterEach(function() {});

    it("should navigate to View All page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(2000);
        mainOprPage.viewAllLnk.click();
        browser.sleep(2000);
        
    });

    it("should navigate to Invite User page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(2000);
        mainOprPage.inviteUserLnk.click();
        browser.sleep(2000);
     
    });

    it("should open Paul Laguna's Operator page", function() {
        expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
        naviPage.operatorsNavLnk.click();
        browser.sleep(2000);
        mainOprPage.operatorPaul.click();
        browser.sleep(2000);
    });

    // it("should ", function() {
    //     expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
    //     loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
    //     loginPage.enterPasswordKeys.sendKeys("djtanner1983");
    //     loginPage.clickLoginBtn.click();
    //     browser.sleep(2000);
        
    // });

    // it("should ", function() {
    //     expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
    //     loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
    //     loginPage.enterPasswordKeys.sendKeys("djtanner1983");
    //     loginPage.clickLoginBtn.click();
    //     browser.sleep(2000);
    // });

    // it("should ", function() {
    //     expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
    //     loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
    //     loginPage.enterPasswordKeys.sendKeys("djtanner1983");
    //     loginPage.clickLoginBtn.click();
    //     browser.sleep(2000);
        
    // });

    // it("Should ", function() {
    //     expect(loginPage.nomIconLogin.isDisplayed()).toBe(true);
    //     loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
    //     loginPage.enterPasswordKeys.sendKeys("djtanner1983");
    //     loginPage.clickLoginBtn.click();
    //     browser.sleep(2000);
        
    // })

})