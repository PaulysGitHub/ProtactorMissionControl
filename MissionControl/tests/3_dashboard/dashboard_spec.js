var NaviPage = require("../../page-objects/2_navi_page/navi_page");
var LoginPage = require("../../page-objects/1_login_page/login_page");
var MainOprPage = require("../../page-objects/7_operators_page/mainOpr_page");
var InviteUserPage = require("../../page-objects/7_operators_page/inviteUsers_page");
var PermissionsPage = require("../../page-objects/7_operators_page/permissions_page");

describe("Need Description", function() {
    var naviPage;
    var loginPage;
    var mainOprPage;
    var inviteUserPage;
    var permissionsPage;

    beforeEach(function(){
        naviPage = new NaviPage();
        loginPage = new LoginPage();
        mainOprPage = new MainOprPage();
        inviteUserPage = new InviteUserPage();
        permissionsPage = new PermissionsPage();

        browser.ignoreSynchronization = true;
        browser.get("https://missioncontrol")
    })
})