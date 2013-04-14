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

var re_car_id = /CarID=([\d])+&/g;

window.bookmarklet = function (opts) {fullFunc(opts)};

// These are the styles, scripts and callbacks we include in our bookmarklet:
window.bookmarklet({

                       css: [],
                       js: [],
//	jqpath : 'myCustomjQueryPath.js', <-- option to include your own path to jquery
                       ready: function () {

                           // The meat of your jQuery code goes here
                           // $("body").html("Hello World");
                           var $anchors = $("a:contains('Choisir')");
                           console.log("Anchor found:" + $anchors);
                           if ($anchors.length) {
                               var js = $anchors.attr("href");
                               console.log("js found:" + $anchors);
                               var match = re_car_id.exec(js);
                               if (match[0]) {
                                   console.log("car id is:" + match[0]);
                                   var carid = match[0];
                               }
                           }
                       }
                   })

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
