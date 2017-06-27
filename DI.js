// ==UserScript==
// @name         DI Fix
// @namespace    DagensIndustri
// @version      0.1
// @description  Fixes DI's shitty website
// @author       TalCet
// @match        http://www.di.se/*
// @grant        none
// ==/UserScript==

(function() {

    var removeGiantHeader = function() {
        var giantHeader = document.querySelector('.di_panorama-wrapper');
        giantHeader.style.display = 'none';
    };
    var removeSecondGiantHeader = function() {
        var header = document.querySelector('.di_header');
        header.style.display = 'none';
    };
    var removeStickyHeader = function() {
        var header = document.querySelector('.di_header__sticky-wrapper');
        header.style.display = 'none';
    };
    var centerPage = function() {
        var div = document.querySelector('.di_main-area');
        div.style.position = 'relative';
        div.style.marginLeft = 'auto';
        div.style.marginRight = 'auto';
    };

    removeGiantHeader();
    removeSecondGiantHeader();
    removeStickyHeader();
    centerPage();

    var myInterval = window.setInterval(function() {

        var paywallCont = document.querySelector('.paywall-content');
        var payMe = document.querySelector('#serviceplusPaywallpaywall-container');

        if (paywallCont) {
            paywallCont.style.height = 'auto';
            payMe.style.display = 'none';

        }

        if (paywallCont && paywallCont.style.height === 'auto')
            clearInterval(myInterval);

        }
    , 1000);

})();
