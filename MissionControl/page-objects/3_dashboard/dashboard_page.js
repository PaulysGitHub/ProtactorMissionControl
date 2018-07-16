var DashboardPage = function () {}

    DashboardPage.prototype = Object.create({}, {
        // Header Links
        dashClickDashLnk: { get: function() { return element(by.css('li.active:nth-child(1) > a:nth-child(1)'))}},
        dashClickChannelsLnk: { get: function() { return element(by.css('#navbarText > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)'))}},

        // Recent Videos Modal
        dashShowAdjEntriesDropD: { get: function() { return element(by.css('select.form-control:nth-child(1)'))}},
        dashShowAdjEntries10: { get: function() { return element(by.css('select.form-control:nth-child(1) > option:nth-child(1)'))}},
        dashShowAdjEntries25: { get: function() { return element(by.css('select.form-control:nth-child(1) > option:nth-child(2)'))}},
        dashShowAdjEntries50: { get: function() { return element(by.css('select.form-control:nth-child(1) > option:nth-child(3)'))}},
        dashShowAdjEntries100: { get: function() { return element(by.css('select.form-control:nth-child(1) > option:nth-child(4)'))}},
        
        dashSearchEntriesBox: { get: function() { return element(by.css('input.form-control:nth-child(1)'))}},

        dashVideoRowSorter: { get: function() { return element(by.css('th.sorting:nth-child(1)'))}},
        dashVideoIdRowSorter: { get: function() { return element(by.css('th.text-center:nth-child(2)'))}},
        dashVideoChannelRowSorter: { get: function() { return element(by.css('th.text-center:nth-child(3)'))}},
        dashVideoTitleRowSorter: { get: function() { return element(by.css('th.text-center:nth-child(4)'))}},
        dashVideoViewsRowSorter: { get: function() { return element(by.css('th.text-center:nth-child(5)'))}},
        dashVideoSourceRowSorter: { get: function() { return element(by.css('th.text-center:nth-child(6)'))}},

        dashVideoInRowClick: { get: function() { return element(by.css('tr.odd:nth-child(1) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)'))}},
        dashVideoTitleRowClick: { get: function() { return element(by.css('tr.odd:nth-child(1) > td:nth-child(4) > a:nth-child(1)'))}}, // You have to eventually figure out a dynamic approach
        dashVideoSourceRowClick: { get: function() { return element(by.css('tr.odd:nth-child(1) > td:nth-child(6) > a:nth-child(1)'))}}, // You have to eventually figure out a dynamic approach
        
        // Footer Pagination Links
        dashPreviousPaginationLnk: { get: function() { return element(by.css('#datatable_previous'))}},
        dashPageOnePaginationLnk: { get: function() { return element(by.css('li.paginate_button:nth-child(2) > a:nth-child(1)'))}},
        dashPageTwoPaginationLnk: { get: function() { return element(by.css('li.paginate_button:nth-child(3) > a:nth-child(1)'))}},
        dashPageNextPaginationLnk: { get: function() { return element(by.css('#datatable_next > a:nth-child(1)'))}},

    })
module.exports = DashboardPage