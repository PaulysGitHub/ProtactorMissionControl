let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// var VideoReporter = require('protractor-video-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "TileDashBoard Test Results"
});

exports.config = {
    framework: "jasmine2",

    seleniumAddress: "http://localhost:4444/wd/hub",

    capabilities: {
        browserName: "chrome", 
        // browserName: "firefox",
    },

    specs:[
        "./tests/1_login_tests/login_spec.js",
        "./tests/2_navi_tests/navi_spec.js",
        "./tests/7_operators_tests/mainOpr_spec.js",
        "./tests/7_operators_tests/inviteUsers_spec.js",
        "./tests/7_operators_tests/permissions_spec.js",
        "./tests/1_login_tests/resetPass_spec.js",
    ],
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function() {}
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    afterLaunch: function (exitCode) {
        return new Promise(function (resolve)  {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    logLevel: "WARN",
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: false
            }
        }));
        // jasmine.getEnv().addReporter(new VideoReporter({
        //     baseDirectory: Path.join(__dirname, 'reports/videos/')
        // }));

    }
}; 