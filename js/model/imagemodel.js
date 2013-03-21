/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['underscore', 'backbone'], function(_, Backbone) {
    var ImageModel = Backbone.Model.extend({
        // Default attributes for the photo
        defaults: {
            // Ensure that each photo created has an `src`.
            src: "img/images.jpg",
            farm : '9',
            server : '8226',
            id : '8571500378',
            secret : '99765e4df8'
        },
        initialize: function() {
        }
    });

    return ImageModel;
});

