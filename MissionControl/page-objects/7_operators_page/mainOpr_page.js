var OperatorsPage = function() {}

OperatorsPage.prototype = Object.create({}, {
    viewAllLnk: { get: function() { return element(by.css('#navbarText > ul > li.nav-item.active > a'))}},
    inviteUserLnk: { get: function() { return element(by.css('#navbarText > ul > li:nth-child(2) > a'))}},
    operatorPaul: { get: function() { return element(by.css('#main-wrapper > div > div.container > div:nth-child(2) > div > div > div > div > div > div:nth-child(574) > a'))}},
    
})
module.exports = OperatorsPage