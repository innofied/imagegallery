/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone','imagecollection'], 
    function($, _, Backbone,imagecollection){

        var DetailView = Backbone.View.extend({
            el: $('body'), // el attaches to existing element
            //template: _.template(addimage),
            
            events: {
            //'click .thumb': 'imageView'
            },
    
            initialize: function(){
                //_.bindAll(this, 'getImage','render','imageView'); // every function that uses 'this' as the current object should be in here
                //console.log(this.collection);
                //this.getImage();
                this.collection=imagecollection;
                console.log(this.collection);
                console.log(this.id);
                var imagemod = this.collection.where({
                    id: this.id
                    });
                console.log(imagemod[0].attributes)
            }
            
        /*
             * Function that send ajax request to the flickr api and gets images one by one.
             * Calls render function for each image.
             */
        });
        return DetailView;
    });

