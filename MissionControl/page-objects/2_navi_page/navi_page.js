var NaviPage = function () {}

NaviPage.prototype = Object.create({},{
    dashboardNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(2) > a'))}},
    targetListsNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(3) > a'))}},
    adEngineNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(5) > a'))}},
    adPerformanceNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(6) > a'))}},
    adExclusionNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(7) > a'))}},
    operatorsNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(9) > a'))}},
    settingsNavLnk: { get: function() { return element(by.css('#sidebarnav > li.active > a'))}},
    logoutNavLnk: { get: function() { return element(by.css('#sidebarnav > li:nth-child(11) > a'))}},
})
module.exports = NaviPage

