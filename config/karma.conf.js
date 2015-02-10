module.exports = function(config){
    config.set({
    basePath : '../',

    files : [

        'public/js/vendor-static/jquery.min.js',
        'public/js/vendor/lodash/dist/lodash.compat.min.js',
        'public/js/vendor-static/bootstrap.min.js',
        'public/js/vendor/spin.js/spin.js',
        'public/js/vendor-static/owl.carousel.min.js',
        'public/js/vendor-static/img-touch-canvas.js',
        'public/js/vendor-static/jquery.fullscreen-min.js',
        'public/js/vendor-static/main.js',
        'https://js.stripe.com/v2/',
        'public/js/vendor/angular/angular.min.js',
        'public/js/vendor/angular-touch/angular-touch.js',
        'public/js/vendor/angular-mocks/angular-mocks.js',
        'public/js/vendor/angular-cookie/angular-cookie.min.js',
        'public/js/vendor/angular-resource/angular-resource.min.js',
        'public/js/vendor/restangular/dist/restangular.min.js',
        'public/js/vendor/angular-ui-router/release/angular-ui-router.min.js',
        'public/js/vendor/angular-translate/angular-translate.min.js',
        'public/js/vendor/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
        'public/js/vendor/angular-stripe-js/build/angular-stripe-js.min.js',
        'public/js/vendor/angular-xeditable/dist/js/xeditable.js',
        'public/js/vendor/angular-sanitize/angular-sanitize.js',
        'public/js/vendor/angular-ui-select/dist/select.min.js',
        'public/js/vendor/angular-directive.g-signin/google-plus-signin.js',

        // dummy config/bootstrap for testing
        'test/unit/bootstrap-test.js',

        'public/js/app/shared/shared-index.js',
        'public/js/app/shared/settings.js',
        'public/js/app/shared/site-config.js',
        'public/js/app/shared/services/cookie-svc.js',
        'public/js/app/shared/filters/filters.js',
        'public/js/app/shared/services/global-data.js',
        'public/js/app/shared/services/configuration-service.js',
        'public/js/app/shared/services/configuration-rest.js',
        'public/js/app/shared/services/http-queue.js',
        'public/js/app/shared/services/event-service.js',
        'public/js/app/shared/controllers/sidebar-navigation-ctrl.js',
        'public/js/app/shared/controllers/top-navigation-ctrl.js',
        'public/js/app/shared/i18n/i18-index.js',
        'public/js/app/shared/i18n/i18-constants.js',
        'public/js/app/shared/i18n/lang/en.js',
        'public/js/app/shared/i18n/lang/de.js',
        'public/js/app/shared/i18n/providers/translation-provider.js',

        'public/js/app/home/home-index.js',
        'public/js/app/home/controllers/home-ctrl.js',

        'public/js/app/products/products-index.js',
        'public/js/app/products/controllers/browse-products-ctrl.js',
        'public/js/app/products/controllers/product-detail-ctrl.js',
        'public/js/app/products/services/product-service.js',
        'public/js/app/products/services/price-service.js',
        'public/js/app/products/services/price-product-rest.js',
        'public/js/app/products/services/category-service.js',

        'public/js/app/cart/cart-index.js',
        'public/js/app/cart/controllers/cart-ctrl.js',
        'public/js/app/cart/services/cart-service.js',
        'public/js/app/cart/services/cart-rest.js',

        'public/js/app/checkout/checkout-index.js',
        'public/js/app/checkout/controllers/checkout-ctrl.js',
        'public/js/app/checkout/controllers/checkout-base-ctrl.js',
        'public/js/app/checkout/controllers/checkout-edit-cart-ctrl.js',
        'public/js/app/checkout/services/checkout-service.js',
        'public/js/app/checkout/directives/inline-error-input.js',
        'public/js/app/checkout/services/checkout-rest.js',

        'public/js/app/confirmation/confirmation-index.js',
        'public/js/app/confirmation/controllers/confirmation-ctrl.js',
        'public/js/app/confirmation/services/order-details-svc.js',
        'public/js/app/confirmation/services/order-details-rest.js',

        'public/js/app/errors/controllers/errors-ctrl.js',
        'public/js/app/errors/backendStub.js',

        'public/js/app/account/account-index.js',
        'public/js/app/account/controllers/account-ctrl.js',
        'public/js/app/account/controllers/account-order-detail-ctrl.js',
        'public/js/app/account/services/account-service.js',

        'public/js/app/auth/auth-index.js',
        'public/js/app/auth/controllers/auth-modal-dialog-ctrl.js',
        'public/js/app/auth/controllers/password-reset-ctrl.js',
        'public/js/app/auth/controllers/password-update-ctrl.js',
        'public/js/app/auth/controllers/password-reset-update-ctrl.js',
        'public/js/app/auth/directives/confirm-input.js',
        'public/js/app/auth/services/auth-rest.js',
        'public/js/app/auth/services/token-service.js',
        'public/js/app/auth/services/auth-service.js',
        'public/js/app/auth/services/anon-auth-service.js',
        'public/js/app/auth/services/auth-dialog-manager.js',
        'public/js/app/auth/services/session-service.js',
        
        'public/js/app/shared/controllers/currency-selector-ctrl.js',
        'public/js/app/shared/controllers/language-selector-ctrl.js',
        'public/js/app/shared/directives/popover.js',

        'public/js/app/orders/orders-index.js',
        'public/js/app/orders/services/order-list-service.js',
        'public/js/app/orders/services/orders-rest.js',

        'public/js/app/app.js',

        'public/js/vendor-static/ui-bootstrap-tpls.js',
        'public/js/vendor-static/jquery.menu-aim.js',

        'test/unit/*.js',
        'test/unit/account/*.js',
        'test/unit/auth/*.js',
        'test/unit/account/*.js',
        'test/unit/cart/*.js',
        'test/unit/checkout/*.js',
        'test/unit/confirmation/*.js',
        'test/unit/errors/*.js',
        'test/unit/home/*.js',
        'test/unit/orders/*.js',
        'test/unit/products/*.js',
        'test/unit/shared/*.js'

    ],

    exclude : [

    ],

    preprocessors : {
        'public/js/app/**/*.js': 'coverage'
    },

    reporters : ['coverage','progress'],

    coverageReporter : {
        type : 'html',
        dir : 'coverage/'
    },

    autoWatch : true,
    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}