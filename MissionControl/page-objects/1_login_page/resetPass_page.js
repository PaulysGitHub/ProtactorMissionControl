var ResetPasswordPage = function () {}

ResetPasswordPage.prototype = Object.create({},{
    recoverUrPassHdrText: { get: function() { return element(by.css('#recoverform > div:nth-child(1) > div > h3'))}},
    recoverUrPassIntructMsg: { get: function() { return element(by.css('#recoverform > div:nth-child(1) > div > p'))}},
    recoverUrPassEmailTxtBox: { get: function() { return element(by.css('#recoverform > div:nth-child(2) > div > input'))}},
    recoverUrPassResetBtn: { get: function() { return element(by.css('#recoverform > div.form-group.text-center.m-t-20 > div > button'))}},
    backToLoginLink: { get: function() { return element(by.css('#to-login'))}},

    wrongPasswordError: { get: function() { return element(by.css('.alert'))}},

    // Gmail stuff
    emailLoginToGmail: { get: function() { return element(by.css('#identifierId'))}},
    emailLoginNextBtnGmail: { get: function() { return element(by.css('#identifierNext > content > span'))}},
    passwordLoginToGmail: { get: function() { return element(by.name('password'))}},
    passwordLoginNextBtnGmail: { get: function() { return element(by.id('passwordNext'))}},
    missionControlEmail: { get: function() { return element(by.name('missioncontrol@nomdat.'))}},
    missionControlResetBtn: { get: function() { return element(by.partialLinkText('forgot'))}},

    // Reset Password screen
    newPasswordTextBox: { get: function() { return element(by.name('password'))}},
    confirmPasswordTextBox: { get: function() { return element(by.name('password_confirm'))}},
    clickResetBtn: { get: function() { return element(by.css('#loginform > div.form-group.text-center.p-b-10 > div > button'))}},

});
module.exports = ResetPasswordPage