/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone','text!templates/addimage.html','imagemodel','imagecollection','detailview'], 
    function($, _, Backbone,addimage,imagemodel,imagecollection,DetailView){

        var ThumbView = Backbone.View.extend({
            el: $('body'), // el attaches to existing element
            template: _.template(addimage),
            
            events: {
                'click .thumb': 'imageView'
            },
    
            initialize: function(){
                _.bindAll(this, 'getImage','render','imageView'); // every function that uses 'this' as the current object should be in here
                this.collection= imagecollection;
                this.getImage();
            },
            
            /*
             * Function that send ajax request to the flickr api and gets images one by one.
             * Calls render function for each image.
             */
            
            getImage : function(){
                var me = this;
                /*
                 *Sends ajax request to flickr api.
                 */
                $.ajax({
                    dataType: 'jsonp',
                    context : this,
                    url: 'http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=f31fb5026b883de1cef583b4e7a9a183&jsoncallback=?',
                    /*
                 *On success of the ajax request, images will be loaded and its url will be stored,
                 *into collection.
                 */
                    success: function(data){
                        if(data.stat==='ok'){
                            for(var i=0; i<data.photos.photo.length;i++){
                                var val=data.photos.photo[i];
                                var imageurl='http://farm'+val.farm+'.staticflickr.com/'+val.server+'/'+val.id+'_'+val.secret+'_m.jpg',
                                farm = val.farm,
                                server=val.server,
                                id=val.id,
                                secret=val.secret;
                                var image= new imagemodel();
                                image.set({
                                    src: imageurl,
                                    farm : farm,
                                    server : server,
                                    id : id,
                                    secret : secret
                                });
                                this.collection.add(image.toJSON());
                                /*
                 *Render function will be to append the images to the html.
                 */
                                this.render(image);
                            }
                        }
                    }
                }); 
            },
    
            /*
             * Gets the model of each image.
             * Appends each image to the body of the html.
             */
            render: function(image){
                $('.image-grid',this.el).append(this.template(image.toJSON()));
            },
            /*
             * Function that creates the expanded view of the image when it's clicked.
             */
            imageView: function(e){
                console.log(e);
                var details=new DetailView({
                    id:e.currentTarget.id
                });
            }
        });
        return ThumbView;
    });

