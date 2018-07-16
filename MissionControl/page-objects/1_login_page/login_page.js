var LoginPage = function () {}

LoginPage.prototype = Object.create({},{
    nomIconLogin: { get: function() { return element(by.css('#loginform > div.form-group.text-center.m-t-20 > div > button'))}},
    enterLoginKeys: { get: function () { return element(by.css('#loginform > div.form-group.m-t-40 > div > input'))}},
    enterPasswordKeys: { get: function () { return element(by.css('#loginform > div:nth-child(2) > div > input'))}},
    clickLoginBtn: { get: function () { return element(by.css('#loginform > div.form-group.text-center.m-t-20 > div > button'))}},
    wrongEmailAlert: { get: function () { return element(by.css('#wrapper > div > div > div'))}},
    wrongEmailAlertMsg1: { get: function () { return element(by.css('#wrapper > div > div > div > h4'))}},
    wrongEmailAlertMsg2: { get: function () { return element(by.css('#wrapper > div > div > div > p:nth-child(2)'))}},
    userLoginButtonAlert: { get: function () { return element(by.css('#wrapper > div > div > div > p:nth-child(3) > a'))}},
    wrongPasswordAlert: { get: function () { return element(by.css('#wrapper > div > div > div'))}},
    wrongPasswordAlertMsg1: { get: function () { return element(by.css('#wrapper > div > div > div > h4'))}},
    wrongPasswordAlertMsg2: { get: function () { return element(by.css('#wrapper > div > div > div > p:nth-child(2)'))}},
    userPasswordButtonAlert: { get: function () { return element(by.css('<button class="btn btn-info btn-lg btn-block text-uppercase btn-rounded" type="submit"> Log In</button>'))}},
    forgotPasswordLink: { get: function () { return element(by.css('#to-recover'))}},

});
module.exports = LoginPage