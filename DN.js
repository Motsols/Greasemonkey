// ==UserScript==
// @name         DN-script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances the user experience (hehe) of dn.se
// @author       TalCet
// @match        http://www.dn.se/*
// @grant        none
// ==/UserScript==

(function() {

    var removeArticleBanner = function() {
        var adPanorama = document.querySelector(".ad.ad--panorama");
        adPanorama.style.display = "none";
    };

    var removePaywall = function() {
        var premContent = document.querySelector(".article__premium-content");
        var payWallOverlay = document.querySelector(".js-paywall.paywall");

        premContent.style.display = "block";
        payWallOverlay.style.display = "none";
    };

    var removeAdBlockedOverlay = function() {
        var poopface = document.querySelector("#pwOverlay");

        poopface.style.display = "none";
    };

    removeArticleBanner();
    removePaywall();
    removeAdBlockedOverlay();

})();
