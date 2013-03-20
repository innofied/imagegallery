/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: '../lib/jquery-1.9.1',
        underscore : '../lib/underscore',
        backbone : '../lib/backbone',
        thumbview : 'view/thumbview'
    },
    shim : {
        jquery : {
            deps : [],
            exports : '$'
        },
        backbone : {
            deps : ['jquery','underscore'],
            exports : 'Backbone'
        },
        underscore : {
            deps : ['jquery'],
            exports : '_'
        }
    }
});

// Start the main app logic.
require(["thumbview"], function(image) {
    var imagesview = new image()
});

