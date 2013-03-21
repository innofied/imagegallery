/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone','imagecollection','text!templates/adddetailimage.html'], 
    function($, _, Backbone,imagecollection,adddetailimage){

        var DetailView = Backbone.View.extend({
            el: $('body'), // el attaches to existing element
            template: _.template(adddetailimage),
            
            events: {
            //'click .thumb': 'imageView'
            },
            /*
     *This function gets the id of the li as well as id of the model image within the collection(same id) 
     *from the click event of the thumbnail view.
     *The model is searched using where method which returns an array.
     */
            initialize: function(){
                //_.bindAll(this, 'getImage','render','imageView'); // every function that uses 'this' as the current object should be in here
                this.collection=imagecollection;
                var imagemodel = this.collection.where({
                    id: this.id
                });
                /*
                 *The matched model array is converted to an object and passed to another function to
                 *append the expanded view
                 */
                var model=imagemodel[0].toJSON();
                model.src='http://farm'+model.farm+'.staticflickr.com/'+model.server+'/'+model.id+'_'+model.secret+'_z.jpg';
                //model.set({
                //src: 'http://farm'+model.get("farm")+'.staticflickr.com/'+model.get("server")+'/'+model.get("id")+'_'+model.get("secret")+'_z.jpg'
                //});

                this.addDetailImage(model);
            },
            
            /*
             * Function that appends expanded view to the list.
             * Before appending removes the previous expanded view and sets the height of the list-item.
             * 
             */
            addDetailImage : function(model){
                $('.expand-container').remove();
                $('.thumb').removeAttr("style");
                var position = $('#'+this.id,this.el).position();
                $('#'+this.id,this.el).attr('style', '-webkit-transition: height 350ms ease; height: 690px');
                $('#'+this.id,this.el).append(this.template(model));
                $('.image-arrow').css('left',position.left+20);
            }
            
        });
        return DetailView;
    });

