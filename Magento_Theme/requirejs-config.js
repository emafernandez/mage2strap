/* Includes bootstrap.min.js with jquery as dependency using require.js */

var config = {
    paths: {
        "jquery.bootstrap": "Magento_Theme/js/bootstrap.min"
    },
    shim: {
        'jquery.bootstrap': {
            'deps': ['jquery']
        }
    }
};
