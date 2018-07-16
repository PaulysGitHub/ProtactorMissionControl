var PermissionsPage = function () {}

    PermissionsPage.prototype = Object.create({}, {
        permOverviewLnkBtn: { get: function() { return element(by.css('#navbarText > ul.navbar-nav.mr-auto > li > a'))}},
        permDeactivatePageLnk: { get: function() { return element(by.css('#navbarText > ul:nth-child(2) > li:nth-child(1) > a'))}},
        permMakeAdminLnkBtn: { get: function() { return element(by.css('#navbarText > ul:nth-child(2) > li:nth-child(2) > a'))}},
        // permVerifyOperatorNm:{ get: function() { return element(by.css(''))}},
        permVerifyActiveDeActive: { get: function() { return element(by.css('#main-wrapper > div > div.container > div.row.page-titles > div > span.label.label-danger'))}},
        permVerifyAdminStatus: { get: function() { return element(by.css('#main-wrapper > div > div.container > div.row.page-titles > div > span.label.label-info'))}},
        
        // Dropdowns
        permTargetListsDropD: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(1) > div > select'))}},
        permTargetChildNone: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(1) > div > select > option:nth-child(2)'))}},
        permTargetChildRead: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(1) > div > select > option:nth-child(3)'))}},
        permTargetChildWrite: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(1) > div > select > option:nth-child(4)'))}},
        permTargetChildAdmin: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(1) > div > select > option:nth-child(5)'))}},
        
        permAdWordsDropD: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(2) > div > select'))}},
        permAdWordsChildNone: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(2) > div > select > option:nth-child(2)'))}},
        permAdWordsChildRead: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(2) > div > select > option:nth-child(3)'))}},
        permAdWordsChildWrite: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(2) > div > select > option:nth-child(4)'))}},
        permAdwordsChildAdmin: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(2) > div > select > option:nth-child(5)'))}},
        
        permOperatorsDropD: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(3) > div > select'))}},
        permOperatorsChildNone: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(3) > div > select > option:nth-child(2)'))}},
        permOperatorsChildRead: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(3) > div > select > option:nth-child(3)'))}},
        permOperatorsChildWrite: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(3) > div > select > option:nth-child(4)'))}},
        permOperatorsChildAdmin: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(3) > div > select > option:nth-child(5)'))}},

        permUpdateBtn: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > form > div:nth-child(4) > div.col-sm-9 > button'))}},

    })
module.exports = PermissionsPage