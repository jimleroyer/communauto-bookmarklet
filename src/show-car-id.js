/*
 * Communauto Bookmarklet - version 1.0
 * Originally written by: jimleroyer
 *
 * If you use this script, please link back to the source
 *
 * Copyright (c) 2013
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 *
 * Copyright (c) 2010 Latent Motion (http://latentmotion.com/how-to-create-a-jquery-bookmarklet/)
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 */

var LANGUAGES = {};
LANGUAGES[1] = "French";
LANGUAGES[2] = "English";

var LANG_SELECT = {};
LANG_SELECT[1] = "Choisir";
LANG_SELECT[2] = "Select";

window.bookmarklet = function (opts) {fullFunc(opts)};

// These are the styles, scripts and callbacks we include in our bookmarklet:
window.bookmarklet({

                       css: [],
                       js: [],
                       // option to include your own path to jquery
                       jqpath: 'https://raw.github.com/jimleroyer/communauto-bookmarklet/master/src/jquery-1.9.1.min.js',
                       ready: function () {
                           console.log("Detected " + detectLanguage() + " language.");
                           var select_word = translateInto(LANG_SELECT);
                           var $anchors = $("a:contains('" + select_word + "')");
                           console.log($anchors.length + " possible reservation(s) found.");
                           $anchors.each(function (index, element) {
                               var js = element.href;
                               var match = /CarID=([\d]+)&/g.exec(js);
                               if (match) {
                                   var carid = match[1];
                                   console.log("Car id is " + carid + ", creating new label.");
                                   element.innerHTML = "&nbsp;" + select_word + " " + carid + "&nbsp;";
                               }
                               else {
                                   console.log("Something went wrong while processing the car link! -> " + js);
                               }
                           });
                       }
                   });

function detectLanguage() {
    return LANGUAGES[languageId()];
}

function languageId() {
    return frmDisponibility.CurrentLanguageID.value;
}

function translateInto(lang_dic) {
    return lang_dic[languageId()];
}

function fullFunc(a) {
    function d(b) {
        if (b.length === 0) {
            a.ready();
            return false
        }
        $.getScript(b[0], function () {d(b.slice(1))})
    }

    function e(b) {$.each(b, function (c, f) {$("<link>").attr({href: f, rel: "stylesheet"}).appendTo("head")})}

    a.jqpath = a.jqpath || "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
    (function (b) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = b;
        c.onload = function () {
            e(a.css);
            d(a.js)
        };
        document.body.appendChild(c)
    })(a.jqpath)
};
