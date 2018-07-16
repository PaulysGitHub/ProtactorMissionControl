var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");
var MainOprPage = require("../../page-objects/7_operators_page/mainOpr_page");
var InviteUserPage = require("../../page-objects/7_operators_page/inviteUsers_page");
var PermissionsPage = require("../../page-objects/7_operators_page/permissions_page");
var ResetPasswordPage = require("../../page-objects/1_login_page/resetPass_page");

describe("Automate Forget Login page", function() {
    var naviPage;
    var loginPage; 
    var mainOprPage;
    var inviteUserPage;
    var permissionsPage;
    var resetPasswordPage;

    beforeEach(function() {
        naviPage = new NaviPage();
        loginPage = new LoginPage();
        mainOprPage = new MainOprPage();
        inviteUserPage = new InviteUserPage();
        permissionsPage = new PermissionsPage();
        resetPasswordPage = new ResetPasswordPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol.nomdata.info/auth/login");

    })

    afterEach(function() {});

    it("analyze all elements", function() {
       
        
        expect(loginPage.forgotPasswordLink.isDisplayed()).toBe(true);
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
        expect(resetPasswordPage.recoverUrPassHdrText.isDisplayed()).toBe(true);
        expect(resetPasswordPage.recoverUrPassHdrText.getText()).toEqual("Recover Password");
        expect(resetPasswordPage.recoverUrPassIntructMsg.isDisplayed()).toBe(true);
        expect(resetPasswordPage.recoverUrPassIntructMsg.getText()).toEqual("Enter your email address and instructions will be sent to you.")
        expect(resetPasswordPage.recoverUrPassEmailTxtBox.isDisplayed()).toBe(true);
        
        expect(resetPasswordPage.recoverUrPassResetBtn.getText()).toEqual("RESET")
        expect(resetPasswordPage.recoverUrPassResetBtn.isDisplayed()).toBe(true);
        expect(resetPasswordPage.backToLoginLink.getText()).toEqual("Back to login")
        expect(resetPasswordPage.backToLoginLink.isDisplayed()).toBe(true);
    });


    it("Should click forgot password link and redirect user to recover password page", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
    });

    
    it("Should populate email text box field", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")


    });

    it("Should allow user to use valid email to recover password", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(2000);

    });

    it("Should not allow user to recover password with invalid email", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul@thisisnom.co")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(2000);
        expect(resetPasswordPage.wrongPasswordError.isDisplayed()).toBe(true);
       
    });

    it("Should not allow user to recover password with no email", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(2000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(2000);
        

    });

    it("Should allow user to click on recover password link from Email", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(1000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(1000);

        browser.get("https://www.gmail.com");
        browser.sleep(1000);

        resetPasswordPage.emailLoginToGmail.sendKeys("paul.laguna@thisisnom.co");
        resetPasswordPage.emailLoginNextBtnGmail.click();
        browser.sleep(1000);
        resetPasswordPage.passwordLoginToGmail.sendKeys("thisisnom1983");
        resetPasswordPage.passwordLoginNextBtnGmail.click();
        browser.sleep(5000);
        resetPasswordPage.missionControlEmail.click();
        resetPasswordPage.missionControlResetBtn.click();
        browser.sleep(50000);


    })

    it("Should allow user to click reset password link from email", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(1000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(1000);

        browser.get("https://www.gmail.com");
        browser.sleep(1000);

        resetPasswordPage.emailLoginToGmail.sendKeys("paul.laguna@thisisnom.co");
        resetPasswordPage.emailLoginNextBtnGmail.click();
        browser.sleep(1000);
        resetPasswordPage.passwordLoginToGmail.sendKeys("thisisnom1983");
        resetPasswordPage.passwordLoginNextBtnGmail.click();
        browser.sleep(5000);
        resetPasswordPage.missionControlEmail.click();
        resetPasswordPage.missionControlResetBtn.click();
        browser.sleep(5000);

        browser.getAllWindowHandles().then(function (handles) {
            // Switch tabs
            browser.switchTo().window(handles[1]);
            // // Close tab
            // browser.driver.close();
    
        resetPasswordPage.newPasswordTextBox.sendKeys("thisisnom1983");
        resetPasswordPage.confirmPasswordTextBox.sendKeys("thisisnom1983");
        resetPasswordPage.clickResetBtn.click();
        browser.sleep(5000)
    });
    });
    it("Should allow user to click reset password, set new password and login with new password", function() {
        loginPage.forgotPasswordLink.click();
        browser.sleep(1000);
        resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
        resetPasswordPage.recoverUrPassResetBtn.click();
        browser.sleep(1000);

        browser.get("https://www.gmail.com");
        browser.sleep(1000);

        resetPasswordPage.emailLoginToGmail.sendKeys("paul.laguna@thisisnom.co");
        resetPasswordPage.emailLoginNextBtnGmail.click();
        browser.sleep(1000);
        resetPasswordPage.passwordLoginToGmail.sendKeys("thisisnom1983");
        resetPasswordPage.passwordLoginNextBtnGmail.click();
        browser.sleep(5000);
        resetPasswordPage.missionControlEmail.click();
        resetPasswordPage.missionControlResetBtn.click();
        browser.sleep(5000);

        browser.getAllWindowHandles().then(function (handles) {
            // Switch tabs
            browser.switchTo().window(handles[1]);
            // // Close tab
            // browser.driver.close();
    
        resetPasswordPage.newPasswordTextBox.sendKeys("thisisnom1983");
        resetPasswordPage.confirmPasswordTextBox.sendKeys("thisisnom1983");
        resetPasswordPage.clickResetBtn.click();
        browser.sleep(5000);

        loginPage.enterLoginKeys.sendKeys("paul.laguna@thisisnom.co");
        loginPage.enterPasswordKeys.sendKeys("thisisnom1983");
        loginPage.clickLoginBtn.click();
        browser.sleep(2000);
    });
});  

it("Should not allow user to click reset password, set new password and login when new password and confirmation password doesn't match", function() {
    loginPage.forgotPasswordLink.click();
    browser.sleep(1000);
    resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
    resetPasswordPage.recoverUrPassResetBtn.click();
    browser.sleep(1000);

    browser.get("https://www.gmail.com");
    browser.sleep(1000);

    resetPasswordPage.emailLoginToGmail.sendKeys("paul.laguna@thisisnom.co");
    resetPasswordPage.emailLoginNextBtnGmail.click();
    browser.sleep(1000);
    resetPasswordPage.passwordLoginToGmail.sendKeys("thisisnom1983");
    resetPasswordPage.passwordLoginNextBtnGmail.click();
    browser.sleep(5000);
    resetPasswordPage.missionControlEmail.click();
    resetPasswordPage.missionControlResetBtn.click();
    browser.sleep(5000);

    browser.getAllWindowHandles().then(function (handles) {
        // Switch tabs
        browser.switchTo().window(handles[1]);
        // // Close tab
        // browser.driver.close();

    resetPasswordPage.newPasswordTextBox.sendKeys("thisisnom1983");
    resetPasswordPage.confirmPasswordTextBox.sendKeys("thisisnom198");
    resetPasswordPage.clickResetBtn.click();
    browser.sleep(5000);
});
});

// it("Should not allow user to click reset password, set new password and login when new password and confirmation password doesn't match", function() {
//     loginPage.forgotPasswordLink.click();
//     browser.sleep(1000);
//     resetPasswordPage.recoverUrPassEmailTxtBox.sendKeys("paul.laguna@thisisnom.co")
//     resetPasswordPage.recoverUrPassResetBtn.click();
//     browser.sleep(1000);

//     browser.get("https://www.gmail.com");
//     browser.sleep(1000);

//     resetPasswordPage.emailLoginToGmail.sendKeys("paul.laguna@thisisnom.co");
//     resetPasswordPage.emailLoginNextBtnGmail.click();
//     browser.sleep(1000);
//     resetPasswordPage.passwordLoginToGmail.sendKeys("thisisnom1983");
//     resetPasswordPage.passwordLoginNextBtnGmail.click();
//     browser.sleep(5000);
//     resetPasswordPage.missionControlEmail.click();
//     resetPasswordPage.missionControlResetBtn.click();
//     browser.sleep(5000);

//     browser.getAllWindowHandles().then(function (handles) {
//         // Switch tabs
//         browser.switchTo().window(handles[1]);
//         // // Close tab
//         // browser.driver.close();

//     resetPasswordPage.newPasswordTextBox.sendKeys("thisisnom1983");
//     resetPasswordPage.confirmPasswordTextBox.sendKeys("thisisnom198");
//     resetPasswordPage.clickResetBtn.click();
//     browser.sleep(5000);
// });
// });
    });