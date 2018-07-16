var InviteUserPage = function () {}

InviteUserPage.prototype = Object.create({}, {
    inviteUserFirstNameKeys: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > form > div:nth-child(1) > div > input'))}},
    inviteUserLastNameKeys: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > form > div:nth-child(2) > div > input'))}},
    inviteUserEmailAddressKeys: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > form > div:nth-child(3) > div > input'))}},
    inviteUserBtn: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > form > div:nth-child(5) > div:nth-child(2) > button'))}},
    inviteUserMissFullNmAlert: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > div'))}},
    inviteUserMissFullNmMsg1: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > div > h4'))}},
    inviteUserMissFullNmMsg2: { get: function() { return element(by.css('#main-wrapper > div > div.container > div > div.col-md-6 > div > div > div > p'))}},
  
})
module.exports = InviteUserPage