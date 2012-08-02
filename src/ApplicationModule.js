Ext.namespace("Mobile.GCRM");

if (typeof Sage.Platform.Mobile.Edit.prototype.expandExpression !== 'function')
{
	Ext.override(Sage.Platform.Mobile.Edit, {
		expandExpression: function(expression) {
			if (typeof expression === 'function')
				return expression.apply(this, Array.prototype.slice.call(arguments, 1));
			else
				return expression;
		}
	});
}

Mobile.GCRM.ApplicationModule = Ext.extend(Sage.Platform.Mobile.ApplicationModule, {
    loadViews: function() {
        Mobile.GCRM.ApplicationModule.superclass.loadViews.apply(this, arguments);

        this.registerView(new Mobile.GCRM.SalesInvoice.List());
        this.registerView(new Mobile.GCRM.SalesInvoice.Detail());
        this.registerView(new Mobile.GCRM.SalesInvoice.List({
            id: 'gcrm_salesinvoice_related',
            expose: false
        }));

        this.registerView(new Mobile.GCRM.TradingAccount.List());
        this.registerView(new Mobile.GCRM.TradingAccount.Detail());
        this.registerView(new Mobile.GCRM.TradingAccount.List({
            id: 'gcrm_tradingaccount_related',
            expose: false
        }));
    },    
    loadCustomizations: function() {
        Mobile.GCRM.ApplicationModule.superclass.loadCustomizations.apply(this, arguments);

        this.registerCustomization('detail', 'account_detail', {
            at: function(row) { return row.view == 'activity_related'; },
            type: 'insert',
            where: 'before',
            value: {
                icon: 'content/images/icons/Company_24.png',
                label: 'ERP Account',
                key: function(entry) { return String.format("$uuid eq '{0}'", entry['$uuid']); },
                view: 'gcrm_tradingaccount_detail'
            }
        });

        this.registerCustomization('detail', 'account_detail', {
            at: function(row) { return row.view == 'activity_related'; },
            type: 'insert',
            where: 'before',
            value: {
                icon: 'content/images/icons/journal_24.png',
                label: 'ERP Sales Invoices',
                resourceKind: 'tradingAccounts',
                resourceProperty: 'salesInvoices',
                resourcePredicate: function(entry) { return String.format("$uuid eq '{0}'", entry['$uuid']); },
                view: 'gcrm_salesinvoice_related'
            }
        });
        
        Ext.override(Mobile.SalesLogix.Account.List, {
            itemTemplate: new Simplate([
                '<li data-action="activateEntry" data-key="{%= $.$key %}" data-descriptor="{%: $.$descriptor %}" class="{% if ($$.isLinked($)) { %}linked-account{% } %}">',
                '<div data-action="selectEntry" class="list-item-selector"></div>',
                '{%! $$.contentTemplate %}',
                '</li>'
            ]),
            isLinked: this.isLinked,
            hashTagQueries: Ext.apply(Mobile.SalesLogix.Account.List.prototype.hashTagQueries || {}, {
                'linked': '$uuid ne null'
            }),
            escapeSearchQuery: function(query) {
                return (query || "").replace(/'/g, "''");
            }
        });
    },
    isLinked: function(entry) {
        return (entry['$uuid'] && (entry['$uuid'] != "00000000-0000-0000-0000-000000000000"));
    }
});