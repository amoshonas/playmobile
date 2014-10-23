/**
 * Created by i839794 on 10/8/14.
 */

describe('GlobalData', function () {

     var   mockedCookieSvc = {
            setLanguageCookie: jasmine.createSpy(),
            setCurrencyCookie: jasmine.createSpy()
        };
    var GlobalData = null;
    var defaultLang = 'en';
    var $rootScope;

    beforeEach( function() {

        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
        module('ds.i18n');
        module('ds.shared');

        module(function ($provide) {
            $provide.value('CookieSvc', mockedCookieSvc);
            //$provide.value('$translate', mockedTranslate);
            $provide.constant('storeConfig', {defaultLanguage: defaultLang});
        });

        inject(function(_GlobalData_, _$rootScope_){
            GlobalData = _GlobalData_;
            $rootScope = _$rootScope_;
        });

    });

    describe('setLanguage()', function () {

        beforeEach(function(){
           GlobalData.setAvailableLanguages([{id:'en', label: 'English'}, {id: 'de', label: 'Deutsch'}]);
        });

        it('should notify translate service', function(){
            var newLang = 'de';
            GlobalData.setLanguage(newLang);
            //expect(mockedTranslate.use).toHaveBeenCalledWith(newLang);
            expect(mockedCookieSvc.setLanguageCookie).toHaveBeenCalled();
        });

        it('should update global data to current language', function () {
            var newLang = 'de';
            GlobalData.setLanguage(newLang);
            expect(GlobalData.getLanguageCode()).toEqualData(newLang);
        });

        it('to non-default language should update accept-languages', function () {
            var newLang = 'de';
            GlobalData.setLanguage(newLang);
            expect(GlobalData.getAcceptLanguages()).toEqualData('de;q=1,en;q=0.5');
        });

        it('to default language should set accept-language to default', function () {
            var newLang = defaultLang;
            GlobalData.setLanguage(newLang);
            expect(GlobalData.getAcceptLanguages()).toEqualData(newLang);
        });

    });


    describe('setCurrency()', function(){
        var newCur = 'EUR';
        var currencyEventSpy;

        beforeEach(function(){
            currencyEventSpy =  jasmine.createSpy();
            $rootScope.$on('currency:updated', currencyEventSpy);
            GlobalData.setAvailableCurrencies([{id:'EUR'}, {id:'USD'}]);
            GlobalData.setCurrency(newCur);
        });

        it('should set the currency as cookie', function(){
            var update = 'USD';
            GlobalData.setCurrency(update);
            expect(mockedCookieSvc.setCurrencyCookie).toHaveBeenCalledWith(update);
        });

        it('should raise event <<currency:updated>> if currency changed', function(){
            expect(currencyEventSpy).toHaveBeenCalled();
        });

        it('should set the store currency', function(){
            expect(GlobalData.getCurrencyId()).toEqualData(newCur);
        });

        it('should return the correct currency symbol', function(){
            var curSymbol = GlobalData.getCurrencySymbol();
            expect(curSymbol).toEqualData('\u20AC');
        });

        it('should reject the currency update if currency not among available currencies', function(){
           GlobalData.setCurrency('pl');
            expect(GlobalData.getCurrencyId()).toEqualData(newCur);

        });


    });

    describe('setAvailableLanguage()', function(){
       it('should return the same language', function(){
          var langs = [{id: 'kl', label: 'Klingon'}];
           GlobalData.setAvailableLanguages(langs);
           var out = GlobalData.getAvailableLanguages();
           expect(out).toEqualData(langs);
       });
    });

    describe('setAvailableCurrencies()', function(){
        it('should return the same currencies', function(){
            var currs = [{id: 'CAD', label: 'Canadian Dollar'}];
            GlobalData.setAvailableCurrencies(currs);
            var out = GlobalData.getAvailableCurrencies();
            expect(out).toEqualData(currs);
        });
    });

    describe('loadInitialLanguage()', function(){
        var defaultLangCode = 'fr';

        beforeEach(function(){
            GlobalData.setAvailableLanguages([{id: defaultLangCode, label: 'French', default:true}, {id:'kl', label: 'Klingon'}]);
        });

        it('should use the cookie language if set', function(){
            var cookieLang = 'kl';
            mockedCookieSvc.getLanguageCookie = jasmine.createSpy().andReturn({languageCode: cookieLang});
            GlobalData.loadInitialLanguage();
            expect(GlobalData.getLanguageCode()).toEqualData(cookieLang);
        });

        it('should use default language if cookie not set', function(){
            mockedCookieSvc.getLanguageCookie = jasmine.createSpy().andReturn(null);
            GlobalData.loadInitialLanguage();
            expect(GlobalData.getLanguageCode()).toEqualData(defaultLangCode);
        });
    });

    describe('loadInitialCurrency()', function(){

        var defaultCurrency = 'CAD';
        var bitcoin = 'BTC';

        beforeEach(function(){
            GlobalData.setAvailableCurrencies([{id: defaultCurrency, label: 'Canadian Dollar', default:true}, {id:bitcoin, label: 'Bitcoin'}]);
        });

        it('should use the cookie currency if set', function(){
            var cookieCurr = bitcoin;
            mockedCookieSvc.getCurrencyCookie = jasmine.createSpy().andReturn({currency: bitcoin});
            GlobalData.loadInitialCurrency();
            expect(GlobalData.getCurrencyId()).toEqualData(cookieCurr);
        });

        it('should use default currency if cookie not set', function(){
            mockedCookieSvc.getCurrencyCookie = jasmine.createSpy().andReturn(null);
            GlobalData.loadInitialCurrency();
            expect(GlobalData.getCurrencyId()).toEqualData(defaultCurrency);
        });
    });


});

