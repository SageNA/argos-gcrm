/// <reference path="../../../../ext/ext-core-debug.js"/>
/// <reference path="../../../../Simplate.js"/>
/// <reference path="../../../../sdata/SDataSingleResourceRequest.js"/>
/// <reference path="../../../../sdata/SDataService.js"/>
/// <reference path="../../../../platform/View.js"/>
/// <reference path="../../../../platform/Detail.js"/>
/// <reference path="../../Format.js"/>

Ext.namespace("Mobile.GCRM.TradingAccount");

Mobile.GCRM.TradingAccount.Detail = Ext.extend(Sage.Platform.Mobile.Detail, {
    id: 'gcrm_tradingaccount_detail',
    titleText: 'Trading Account',
    nameText: 'name',
    statusText: 'status',
    webText: 'web',
    balanceText: 'balance',
    limitText: 'limit',
    lastInvText: 'last inv',
    lastPayText: 'last pay',    
    relatedItemsText: 'Related Items',
    relatedAccountsText: 'Account(s)',
    serviceName: 'gcrm',
    resourceKind: 'tradingAccounts',
    querySelect: [
        'name',
        'status',
        'website',
        'financeBalance',
        'financeLimit',
        'lastInvoiceDate',
        'lastPaymentDate'
    ],   
    createLayout: function() {
        return this.layout || (this.layout = [
            {name: 'name', label: this.nameText},
            {name: 'status', label: this.statusText},
            {name: 'website', label: this.webText, renderer: Sage.Platform.Mobile.Format.link},
            {name: 'financeBalance', label: this.balanceText},
            {name: 'financeLimit', label: this.limitText},
            {name: 'lastInvoiceDate', label: this.lastInvText},
            {name: 'lastPaymentDate', label: this.lastPayText},
            {options: {title: this.relatedItemsText, list: true}, as: [
                {
                    view: 'account_related',
                    where: this.formatRelatedQuery.createDelegate(this, ["$uuid eq '{0}'", '$uuid'], true),
                    label: this.relatedAccountsText,
                    icon: 'content/images/icons/Company_24.png'
                }
            ]}
        ]);
    }
});