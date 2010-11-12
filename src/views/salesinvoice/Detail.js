/// <reference path="../../../../ext/ext-core-debug.js"/>
/// <reference path="../../../../Simplate.js"/>
/// <reference path="../../../../sdata/SDataSingleResourceRequest.js"/>
/// <reference path="../../../../sdata/SDataService.js"/>
/// <reference path="../../../../platform/View.js"/>
/// <reference path="../../../../platform/Detail.js"/>
/// <reference path="../../Format.js"/>

Ext.namespace("Mobile.GCRM.SalesInvoice");

Mobile.GCRM.SalesInvoice.Detail = Ext.extend(Sage.Platform.Mobile.Detail, {
    id: 'gcrm_salesinvoice_detail',
    titleText: 'Sales Invoice',
    serviceName: 'gcrm',
    resourceKind: 'salesInvoices',
    querySelect: [
        'reference',
        'customerReference',
        'date',
        'taxTotal',
        'grossTotal'
    ],
    createLayout: function() {
        return this.layout || (this.layout = [
            {name: 'reference', label: 'ref'},
            {name: 'customerReference', label: 'cust ref'},
            {name: 'date', label: 'date'},
            {name: 'grossTotal', label: 'gross'},
            {name: 'taxTotal', label: 'tax'}
        ]);
    }
});