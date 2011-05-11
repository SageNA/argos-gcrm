/// <reference path="../../../../../argos-sdk/libraries/ext/ext-core-debug.js"/>
/// <reference path="../../../../../argos-sdk/libraries/sdata/sdata-client-debug"/>
/// <reference path="../../../../../argos-sdk/libraries/Simplate.js"/>
/// <reference path="../../../../../argos-sdk/src/View.js"/>
/// <reference path="../../../../../argos-sdk/src/List.js"/>

Ext.namespace("Mobile.GCRM.SalesInvoice");

(function() {
    Mobile.GCRM.SalesInvoice.List = Ext.extend(Sage.Platform.Mobile.List, {
        contentTemplate: new Simplate([
            '<h3>{%: $.reference %} ({%: $.customerReference %})</h3>',
            '<h4>{%: $.date %}</h4>'
        ]),
        id: 'gcrm_salesinvoice_list',
        icon: 'content/images/icons/journal_24.png',
        detailView: 'gcrm_salesinvoice_detail',
        titleText: 'Sales Invoices',
        serviceName: 'gcrm',        
        querySelect: [
            'reference',
            'customerReference',
            'date'
        ],
        resourceKind: 'salesInvoices',
        /* todo: find out why search queries do not work */
        formatSearchQuery: function(query) {
            return String.format('reference like "%{0}%" or customerReference like "%{0}%"', this.escapeSearchQuery(query));
        }
    });
})();