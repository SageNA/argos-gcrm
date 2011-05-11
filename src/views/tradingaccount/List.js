/// <reference path="../../../../ext/ext-core-debug.js"/>
/// <reference path="../../../../Simplate.js"/>
/// <reference path="../../../../sdata/SDataResourceCollectionRequest.js"/>
/// <reference path="../../../../sdata/SDataService.js"/>
/// <reference path="../../../../platform/View.js"/>
/// <reference path="../../../../platform/List.js"/>

Ext.namespace("Mobile.GCRM.TradingAccount");

Mobile.GCRM.TradingAccount.List = Ext.extend(Sage.Platform.Mobile.List, {
    contentTemplate: new Simplate([
        '<h3>{%: $.name %}</h3>',
        '<h4>{%: $.shortName %}</h4>'
    ]),
    id: 'gcrm_tradingaccount_list',
    icon: 'content/images/icons/Company_24.png',
    detailView: 'gcrm_tradingaccount_detail',
    titleText: 'Trading Accounts',
    serviceName: 'gcrm',
    resourceKind: 'tradingAccounts',
    queryOrderBy: 'name',
    querySelect: [
        'name',
        'reference',
        'status'
    ],
    /* todo: find out why search queries do not work */
    formatSearchQuery: function(query) {
        return String.format('name like "%{0}%"', this.escapeSearchQuery(query));
    }   
});